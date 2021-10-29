import React from "react";
import { Typography } from "antd";
const { Title } = Typography;

export const CustomTitle = (props) => (
  <Title>{props.text}</Title>
);
export const CustomParagraph = (props) => (
  <p {...props}>{props.text}</p>
);
