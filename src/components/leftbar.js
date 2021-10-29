import React, { useContext, useEffect, useState } from "react";
import { Divider, Tree, Input, Space, Row } from "antd";
import { ItalicOutlined } from "@ant-design/icons";
import { GlobalContext } from "../context/global";

const filterInternal = (data) => {
  return data
    .map((item) =>
      item.children
        ? { ...item, children: filterInternal(item.children) }
        : item
    )
    .filter((item) => !item.internal);
};

const Leftbar = ({ selected, setEditElement, editElement = null }) => {
  const treeData = filterInternal(
    selected?.data?.domTree ? [selected?.data?.domTree] : []
  );
  const isSelectedModule = selected && selected.type === "module";
  const elementData = Object.entries(editElement?.props || []);
  const { selectedElement, setEditableElement } = useContext(GlobalContext);
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    setEditElement(selectedElement);
    if (selectedElement) setSelectedKeys([selectedElement.key]);
  }, [selectedElement, setEditElement]);

  const onSelectElement = (keys, info) => {
    setSelectedKeys(keys);
    setEditableElement(info.node);
  };

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData(
      "designer/add",
      JSON.stringify({ module: selected.id, type: nodeType })
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const renderProps = (data) => {
    return data.map(([key, value]) => (
      <Row key={key} style={{ marginTop: "10px" }}>
        <strong>{key}</strong>
        <span>
          {" "}
          {typeof value === "object" ? (
            renderProps(Object.entries(value))
          ) : (
            <Input value={value} />
          )}
        </span>
      </Row>
    ));
  };

  return (
    <aside className="left-bar">
      <Space direction="vertical">
        <h1>Module Editable Components</h1>
        <p>Double click on the login module to see its properties.</p>
        {isSelectedModule && (
          <div>
            <h4>Module: {selected.data.title}</h4>
            {treeData && (
              <Tree
                showLine
                showLeafIcon={false}
                defaultExpandAll
                onSelect={onSelectElement}
                selectedKeys={selectedKeys}
                treeData={treeData}
              />
            )}
            <Divider />
            <div
              style={{
                width: "100%",
                height: "60px",
                border: "1px solid gray",
                marginBottom: "10px",
              }}
              className="grabbable"
              onDragStart={(event) => onDragStart(event, "input")}
              draggable
            >
              <Input className="elements" style={{ width: "100px" }} disabled />{" "}
              <br />
              Add Input Element
            </div>
            <div
              onDragStart={(event) => onDragStart(event, "paragraph")}
              draggable
              className="grabbable"
              style={{
                width: "100%",
                height: "60px",
                border: "1px solid gray",
              }}
            >
              <ItalicOutlined
                className="elements"
                style={{ width: "100px" }}
                disabled
              />{" "}
              <br />
              Add Paragraph Element
            </div>
            <Divider />

            <strong>
              {editElement && <span>Properties of {editElement.title}</span>}
            </strong>

            <div>{elementData && renderProps(elementData)}</div>
          </div>
        )}
      </Space>
    </aside>
  );
};
export default Leftbar;
