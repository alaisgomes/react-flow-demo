import React, { useState, useEffect } from "react";
import { Divider, Collapse, Typography } from "antd";
import { SketchPicker } from "react-color";
import { HexColorPicker } from "react-colorful";
import {useDebouncyEffect} from 'use-debouncy';


const { Panel } = Collapse;
const { Title, Paragraph } = Typography;

export const DebouncedPicker = ({ color, onChange }) => {
  const [value, setValue] = useState(color);

  useEffect(() => {
    if (color) {
      setValue(color);
    }
  }, [color, value]);

  useDebouncyEffect(() => onChange(value), 200, [value]);

  return <HexColorPicker color={value} onChange={setValue} />;
};

const Sidebar = ({
  onUpdateName = null,
  selectedName = "",
  selected = null,
  onColorUpdate = () => {},
  colorList = [],
  color = "",
}) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const [currentColor, setCurrentColor] = useState("");

  useEffect(() => {
    if (color) {
      setCurrentColor(color);
    }
  }, [color]);

  const showInput = selected && selected.id && selected.data?.label;
  const showColor = selected && selected.id && selected.data?.color;

  const handleUpdateName = (label) => {
    if (onUpdateName && typeof onUpdateName === "function") {
      onUpdateName(label);
    }
  };

  return (
    <aside className="right-bar">
      <Title style={{ padding: "0 10px" }} level={3}>
        Design & Elements
      </Title>
      <Collapse defaultActiveKey={["3"]}>
        <Panel header="Draggable Nodes" key="1">
          <div className="description">
            These are just the default nodes, but we can also have our own
            custom ones. Drag and drop to canvas to test around.
          </div>
          <div>Press delete key to remove elements.</div>
          <div>
            Blue handles are targets (input); red handles are sources (output);
          </div>

          <div
            className="dndnode input"
            onDragStart={(event) => onDragStart(event, "input")}
            draggable
          >
            Input Node
          </div>
          <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "default")}
            draggable
          >
            Default Node
          </div>
          <div
            className="dndnode output"
            onDragStart={(event) => onDragStart(event, "output")}
            draggable
          >
            Output Node
          </div>
          <Divider />
          <Paragraph>
            This is a custom node created. Drag and drop it to the canvas!
          </Paragraph>
          <div
            className="dndnode diamond"
            onDragStart={(event) => onDragStart(event, "diamond")}
            draggable
          >
            Diamond Node
          </div>
        </Panel>

        <Panel header="Label Update" key="2">
          <Paragraph>
            Try selecting a node with labels, then updating its label below:
          </Paragraph>
          {showInput && (
            <div className="updatenode__controls">
              <label>Node label:</label>
              <input
                value={selectedName}
                onChange={(evt) => handleUpdateName(evt.target.value)}
              />
            </div>
          )}
        </Panel>

        <Panel header="Color Update" key="3">
          <Paragraph>
            This option is only available for diamong decision node
          </Paragraph>
          {showColor && (
            <div>
              <Paragraph style={{ marginTop: "10px" }}>
                Color Picker and Color History Palette: Select a color to change
                your element's background
              </Paragraph>
              <Title level={5}>React Color</Title>
              <SketchPicker
                width="90%"
                presetColors={colorList}
                color={currentColor}
                onChange={setCurrentColor}
                onChangeComplete={(color) => onColorUpdate(color.hex)}
              />
              <Divider />
              <Title level={5}>React Colorful</Title>
              <div className="picker">
                <DebouncedPicker color={currentColor.hex} onChange={onColorUpdate} />

                <div className="picker__swatches">
                  {colorList.map((presetColor) => (
                    <button
                      key={presetColor}
                      className="picker__swatch"
                      style={{ background: presetColor }}
                      onClick={() => onColorUpdate(presetColor)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </Panel>
      </Collapse>
    </aside>
  );
};

export default Sidebar;
