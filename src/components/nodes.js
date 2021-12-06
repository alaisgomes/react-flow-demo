import React, {useRef} from "react";
import { Diamond, Circle } from "./shapes";
import { Handle } from "react-flow-renderer";
import emailImage from "../assets/email.png";
import { DatabaseOutlined } from "@ant-design/icons";
import { loginData, initStateWithUniqIds } from "./loginDemo";
import CustomComponent from "./modules/component";
import classNames from "classnames";
import DragAndDropGrid from "./modules/draganddropexample";
import ReactMoveable from "./modules/react-moveable/mainmovable";


export const ImageNode = ({ data }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <img src={data.image} alt={data.alt} />
      <Handle type="target" position="top" />
    </div>
  );
};

export const ModuleNode = ({ data, selected }) => {
  const { interactive } = data;
  const Module = data.module;
  const classes = ["module-node", selected ? "edit-module" : ""];

  return (
    <div
      className={classNames(classes)}
      style={{
        border: "1px solid #A3A3A3",
      }}
    >
      {interactive ? (
        <Module
          component={data.domTree.component}
          props={data.domTree.props}
          innerProps={data.domTree.innerProps}
          selected={data.domTree.selected}
          children={data.domTree.children}
        />
      ) : (
        <Module data={data} />
      )}
    </div>
  );
};

export const DnDGrid = ({ data, selected }) => {
  const classes = ["module-node", selected ? "edit-module" : ""];

  return (
    <div
      className={classNames(classes)}
      style={{
        border: "1px solid #A3A3A3",
        width: '300px',
        height: '600px'
      }}
    >
      <p>{data && data.title}</p>
      <DragAndDropGrid />
    </div>
  );
};

export const Moveable = ({ data, selected }) => {
  const classes = ["module-node", selected ? "edit-module" : ""];
  const moveableRef = useRef(null);

  const parentSize = moveableRef && moveableRef.current && moveableRef.current.getBoundingClientRect();

  return (
    <div
      className={classNames(classes)}
      ref={moveableRef}
      style={{
        border: "1px solid #A3A3A3",
        width: '300px',
        height: '600px'
      }}
    >
      <p>{data && data.title}</p>
      <ReactMoveable  data={data} parentSize={parentSize}/>
    </div>
  );
};

export const nodeTypes = {
  diamond: Diamond,
  circle: Circle,
  img: ImageNode,
  module: ModuleNode,
  gridLayout: DnDGrid,
  moveable: Moveable,
};

/** This is out default canvas with one of each proof of concept elements
 * Available node types are:
 * - Default
 * - Module (I created a login module which is basically a React screen code)
 * - Diamond: custom diamond shape
 * - Image: some image rendered in a div
 * - Circle: custom circle shape with icons. I used antdesign but we can use our FontAwesome as well
 * */
const loginDataDupe = initStateWithUniqIds(loginData);

export const initialElements = [
  {
    id: "1",
    data: { label: "Successful Login Screen!" },
    position: {
      x: 782,
      y: 429,
    },
  },
  {
    id: "22",
    type: "module",
    data: {
      title: "Login",
      module: CustomComponent,
      domTree: loginDataDupe,
      interactive: true,
    },
    position: {
      x: 98,
      y: 122,
    },
  },
  {
    id: "3",
    type: "diamond",
    position: {
      x: 626,
      y: 314,
    },
    data: { label: "SUCCESS", color: '#fdffdf' },
  },
  {
    id: "4",
    type: "img",
    position: { x: 232, y: 587 },
    data: { image: emailImage, alt: "Email Icon Image" },
  },
  {
    id: "5",
    type: "circle",
    position: { x: 373, y: 624 },
    data: {
      icon: <DatabaseOutlined style={{ fontSize: "2.2rem" }} />,
    },
  },
  {
    source: "3",
    sourceHandle: "diamond-2",
    target: "1",
    targetHandle: null,
    label: "Yes",
    labelStyle: {
      fill: "green",
      fontWeight: 700,
    },
    type: "smoothstep",
    arrowHeadType: "arrowclosed",
    id: "reactflow__edge-3diamond-2-1null",
  },
  {
    source: "3",
    sourceHandle: "diamond-1",
    target: "22",
    targetHandle: "login-error-1",
    type: "smoothstep",
    label: "No",
    labelStyle: {
      fill: "red",
      fontWeight: 700,
    },
    arrowHeadType: "arrowclosed",
    id: "reactflow__edge-3diamond-1-22login-error-1",
  },
  {
    source: "22",
    sourceHandle: "login-right-1",
    target: "3",
    targetHandle: "diamond-3",
    type: "smoothstep",
    arrowHeadType: "arrowclosed",
    id: "reactflow__edge-22login-right-1-3diamond-3",
  },
  {
    source: "22",
    sourceHandle: "login-input-1",
    target: "5",
    targetHandle: "circle-1",
    type: "smoothstep",
    arrowHeadType: "arrowclosed",
    id: "reactflow__edge-22login-input-1-5circle-1",
  },
  {
    source: "22",
    sourceHandle: "login-input-2",
    target: "5",
    targetHandle: "circle-1",
    type: "smoothstep",
    arrowHeadType: "arrowclosed",
    id: "reactflow__edge-22login-input-2-5circle-1",
  },
  {
    source: "22",
    sourceHandle: "create-account-1",
    target: "4",
    type: "smoothstep",
    arrowHeadType: "arrowclosed",
    id: "create-account-email",
  },
];

export const newElements = {
  input: {
    component: "input",
    props: {
      placeholder: "New Input Field",
    },
    internalProps: {
      bounds: "parent",
      className: "dnd-element",
    },
    selected: false,
  },
  paragraph: {
    component: "paragraph",
    selected: false,
    props: {
      text: "New paragraph test.",
      style: {
        color: "red",
        width: "100px",
      },
    },
    internalProps: {
      bounds: "parent",
      className: "dnd-element",
      style: {
        resize: "both",
        overflow: "auto",
      },
    },
  },
};

export const DragAndDropElements = [
  {
    id: "99",
    type: "gridLayout",
    data: {
      title: "draggable - No Lock on doubleclock",
      forceMove: true
    },
    position: {
      x: 98,
      y: 122,
    },
  },

  {
    id: "88",
    type: "gridLayout",
    data: {
      title: "draggable - Locked",
      forceMove: false
    },
    position: {
      x: 450,
      y: 122,
    },
  },
];

export const moveableElements = [
  {
    id: "99",
    type: "moveable",
    data: {
      title: "Moveable - No Lock on double-click",
      forceMove: true
    },
    position: {
      x: 98,
      y: 122,
    },
  },

  {
    id: "88",
    type: "moveable",
    data: {
      title: "Moveable - Locked (with bugs currently)",
      forceMove: false
    },
    position: {
      x: 450,
      y: 122,
    },
  },
];
