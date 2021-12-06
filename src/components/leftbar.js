import React, { useContext, useEffect, useState } from "react";
import { Tree, Input, Space, Row, Typography, Collapse } from "antd";
import { ItalicOutlined } from "@ant-design/icons";
import { GlobalContext } from "../context/global";
import { Menu } from "antd";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const filterInternal = (data) => {
  return data
    .map((item) =>
      item.children
        ? { ...item, children: filterInternal(item.children) }
        : item
    )
    .filter((item) => !item.internal);
};

const Leftbar = ({
  selected,
  setEditElement,
  onToggleView = () => {},
  editElement = null,
}) => {
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
        <Title style={{ padding: "0 10px" }} level={3}>
          Module Components
        </Title>
        <Paragraph style={{ padding: "0 10px" }}>
          Double click on the login module to see its properties.
        </Paragraph>

        <Menu
          onClick={onToggleView}
          style={{ width: 256 }}
          defaultSelectedKeys={["default-1"]}
          mode="inline"
        >
          <Menu.Item key="default-1">Default Flow</Menu.Item>
          <Menu.Item key="drag-2">React Draggable (GridLayout)</Menu.Item>
          <Menu.Item key="drag-3">React Movable </Menu.Item>
        </Menu>

        {isSelectedModule && (
          <div>
            <Title style={{ padding: "0 10px" }} level={4}>
              Module: {selected.data.title}
            </Title>
            <Collapse defaultActiveKey={["left-panel-1"]}>
              <Panel header="Element Tree" key="left-panel-1">
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
              </Panel>
              <Panel header="Draggable Elements" key="left-panel-2">
                <div
                  style={{
                    width: "100%",
                    height: "60px",
                    alignSelf: "center",
                    border: "1px solid #c9c9c9",
                    marginBottom: "10px",
                    textAlign: "center",
                  }}
                  className="grabbable"
                  onDragStart={(event) => onDragStart(event, "input")}
                  draggable
                >
                  <Input
                    className="elements"
                    style={{ width: "100px" }}
                    disabled
                  />{" "}
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
                    border: "1px solid #c9c9c9",
                    textAlign: "center",
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
              </Panel>
              <Panel header="Selected Element Properties" key="left-panel-3">
                <strong>
                  {editElement && (
                    <Title level={5}>Properties of {editElement.title}</Title>
                  )}
                </strong>

                <div>{elementData && renderProps(elementData)}</div>
              </Panel>
            </Collapse>
          </div>
        )}
      </Space>
    </aside>
  );
};
export default Leftbar;
