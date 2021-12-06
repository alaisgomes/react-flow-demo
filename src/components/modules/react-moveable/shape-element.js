import React from "react";
import Moveable from "react-moveable";

const MovableBox = ({ pos, Contents, bounds }) => {
  const moveRef = React.useRef(null);
  const [frame, setFrame] = React.useState({
    translate: [0,0],
});

  const [style, setStyle] = React.useState({
    background: "lightblue",
    left: `${100 * pos}px`,
    height: "90px",
    width: "90px",
    color: "grey"
  });
  // const handleDrag = e => {
  //   setStyle(e.transform);
  // };

  const onResizeStart = ({ target, clientX, clientY }) => {
    // console.log("onResizeStart", target);
  };
  const onResize = ({
    target,
    width,
    height,
    dist,
    delta,
    direction,
    clientX,
    clientY
  }) => {

    setStyle({
      background: "white",
      border: "2px solid red",
      color: "gray"
    });
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
  
  };
  const onResizeEnd = ({ target, isDrag, clientX, clientY }) => {
    // console.log("onResizeEnd", target, isDrag);
  };
  const onDragStart = (e) => {
    e.set(frame.translate);
  };
  const onDrag = (e) => {

  frame.translate = e.beforeTranslate;
      e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`;

  };
  const onDragEnd = ({ target, isDrag, clientX, clientY }) => {
    // console.log("onDragEnd", target, isDrag);
  };

  return (
    <div>
        <Moveable
          pinchable={["resizable", "rotatable"]}
          snappable={true}
          resizable={true}

          target={moveRef && moveRef.current}
          draggable={true}
          throttleDrag={0}
          onDrag={onDrag}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onResizeStart={onResizeStart}
          onResize={onResize}
          onResizeEnd={onResizeEnd}
          bounds={bounds}
          renderDirections={["nw","n","ne","w","e","sw","s","se"]}
        />
      <div ref={moveRef} style={style}>
        <Contents />
      </div>
    </div>
  );
};

export default MovableBox
