import React, { useState } from "react";
import ShapeElement from "./shape-element";

const MoveableExample = ({ parentRef }) => {
  const [shapes, setShapes] = useState([
    {
      _id: "5F123",
      name: "shape 1",
      target: null,
      width: 100,
      height: 100,
      top: 110,
      left: 100,
      rotate: 0,
    },
    {
      _id: "5F456",
      name: "shape 2",
      target: null,
      width: 100,
      height: 100,
      top: 220,
      left: 100,
      rotate: 0,
    },
    {
      _id: "5F789",
      name: "shape 3",
      target: null,
      width: 100,
      height: 100,
      top: 340,
      left: 100,
      rotate: 0,
    },
  ]);

  // const onWindowReisze = () => {
  //   TODO: Add event listener for window resize to scale things better
  // };

  const onUpdateRef = (target, index) => {
    
    const newShapes = shapes.map((shape, i) => {
      if (index === i) {
        target.current.style.width = `${shape.width}px`;
        target.current.style.height = `${shape.height}px`;
        target.current.style.transform = `translate(${shape.left}px, ${shape.top}px) rotate(${shape.rotate}deg)`;
        return {
          ...shape,
          target
        }
      }
      return {
        ...shape
      }
    });
    setShapes(newShapes);

  }


  const getshape = (target) => {
    // useRef here for each element
    return shapes.find((shape) => shape._id === target.id.split("-").pop());
  };

  const onDragStart = ({ target, set }) => {
    const shape = getshape(target);
    set([shape.left, shape.top]);
  };
  const onDrag = ({ target, beforeTranslate }) => {
    const shape = getshape(target);
    setShapes(() =>
      shapes.map((b) =>
        b._id === shape._id
          ? { ...b, left: beforeTranslate[0], top: beforeTranslate[1] }
          : b
      )
    );
    target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
  };
  const onResizeStart = ({ target, setOrigin, dragStart }) => {
    const shape = getshape(target);
    setOrigin(["%", "%"]);
    dragStart && dragStart.set([shape.left, shape.top]);
  };
  const onResize = ({ target, width, height, drag }) => {
    const shape = getshape(target);
    const beforeTranslate = drag.beforeTranslate;
    setShapes(() =>
      shapes.map((b) =>
        b._id === shape._id
          ? {
              ...b,
              width,
              height,
              left: beforeTranslate[0],
              top: beforeTranslate[1],
            }
          : b
      )
    );
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px) rotate(${shape.rotate}deg)`;
  };
  const onRotateStart = ({ target, set }) => {
    const shape = getshape(target);
    set(shape.rotate);
  };
  const onRotate = ({ target, beforeRotate }) => {
    const shape = getshape(target);
    setShapes(() =>
      shapes.map((b) =>
        b._id === shape._id ? { ...b, rotate: beforeRotate } : b
      )
    );
    target.style.transform = `translate(${shape.left}px, ${shape.top}px) rotate(${beforeRotate}deg)`;
  };
  const onEnd = () => {};

  return (
    <div className="inner-elements">
      {shapes &&
        shapes.map((shape, i) => (
          <ShapeElement
            container={parentRef && parentRef.current}
            onDragStart={onDragStart}
            onDrag={onDrag}
            onEnd={onEnd}
            onResizeStart={onResizeStart}
            onResize={onResize}
            onRotateStart={onRotateStart}
            onUpdateRef={onUpdateRef}
            onRotate={onRotate}
            shape={shape}
            index={i}
            key={i}
          />
        ))}
    </div>
  );
};

export default MoveableExample;
