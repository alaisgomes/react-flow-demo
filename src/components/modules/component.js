import React, { useContext } from "react";
import { Space, Input, Row } from "antd";
import { Handle } from "react-flow-renderer";
import Button from "./elements/button";
import { CustomTitle, CustomParagraph } from "./elements/typography";
import classNames from "classnames";
import { GlobalContext } from "../../context/global";


// Custom Component renderer for the modules based on our tree internal definition 
export const components = {
  space: Space,
  paragraph: CustomParagraph,
  title: CustomTitle,
  row: Row,
  input: Input,
  button: Button,
  handle: Handle,
};

const CustomComponent = (node) => {
  const {
    customid,
    component,
    selected,
    props,
    internalProps = {},
    children,
    handleClick = (e, id, node) => {},
  } = node;
  const { setEditableElement } = useContext(GlobalContext);

  const onComponentClick = (event, node) => {
    if (typeof handleClick === "function") {
      setEditableElement(node)
    }
    event.stopPropagation();
  };

  if (typeof components[component] !== "undefined") {
    const cn = [
      props.className,
      internalProps.className,
      `${selected ? "selected" : ""}`,
    ];

    const style = Object.assign({}, props.style, internalProps.style);
    return React.createElement(
      components[component],
      {
        customid,
        key: customid,
        ...props,
        ...internalProps,
        style,
        onClick: (e) => onComponentClick(e, node),
        className: classNames(cn),
      },

      children && children.map((p) => CustomComponent(p))
    );
  }

  return <span>Unnknown element</span>;
};

export default CustomComponent;
