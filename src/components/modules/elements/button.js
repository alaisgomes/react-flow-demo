import { Button } from "antd";

const button = (props) => {

  return (
    <Button {...props}>
      {props.text}
    </Button>
  );
};

export default button;
