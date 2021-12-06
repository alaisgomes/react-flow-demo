import React, { Fragment, useEffect, useState, useRef } from "react";
import Moveable from "react-moveable";

const MoveableElement = (props) => {
  const {
    onDragStart,
    onDrag,
    onEnd,
    onResizeStart,
    onResize,
    onRotateStart,
    onRotate,
    container,
    onUpdateRef,
    shape,
    index,
  } = props;

  const [bounds, setBounds] = useState({});

  const elementRef = useRef(null);

  useEffect(() => {
    if (container) {
      const containerBounds = container.getBoundingClientRect();
      // adjust according to canvas x and y positions
      setBounds({
        top: containerBounds.top - containerBounds.y,
        bottom: containerBounds.bottom - containerBounds.y,
        left: containerBounds.left - containerBounds.x,
        right: containerBounds.right - containerBounds.x,
      });
    }
  }, [container]);

  useEffect(() => {
    if (elementRef && elementRef.current) {
      onUpdateRef(elementRef, index)
    }
  }, [elementRef])

  return (
    <Fragment key={index}>
      <Moveable
        key={index + 100}
        target={elementRef && elementRef.current}
        container={container}
        origin={false}
        keepRatio={false}
        edge={true}
        snappable={true}
        snapThreshold={5}
        snapCenter={false}
        bounds={bounds}
        verticalGuidelines={[100, 200, 300]}
        horizontalGuidelines={[0, 100, 200]}
        draggable={true}
        onDragStart={onDragStart}
        onDrag={onDrag.bind(this)}
        onDragEnd={onEnd}
        throttleDrag={1}
        resizable={true}
        onResizeStart={onResizeStart}
        onResize={onResize}
        onResizeEnd={onEnd}
        throttleResize={1}
        renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
        // rotatable={true}
        onRotateStart={onRotateStart}
        onRotate={onRotate.bind(this)}
        onRotateEnd={onEnd}
        throttleRotate={0.2}
        rotationPosition={"top"}

        // pinchable={["resizable"]}
        // onPinch={this.onPinch}
        // onPinchEnd={this.onEnd}
        // pinchThreshold={20}
      />

      <div
        style={{ overflow: "hidden", position: "absolute" }}
        ref={elementRef}
        id={`shape-${shape._id}`}
      >
        <span>
          {" "}
          This is my element <strong>{shape.name}</strong>
        </span>
        <br />
        {`w:${shape.width}, h:${shape.height}, top:${shape.top}, left: ${shape.left}`}
      </div>
    </Fragment>
  );
};

export default MoveableElement;
