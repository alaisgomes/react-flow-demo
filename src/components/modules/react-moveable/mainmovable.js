import React from "react";
import ShapeElement from "./shape-element";


function MyReactNativeElement({ number = 10 }) {
  return (
    <div>
      Component wrapped inside movable: {number} 
    </div>
  );
}
const count = [0, 1, 2];

const MovableApp = ({data, parentSize}) => {
  return (
    <div className="App">
      {count.map(index => {
        return (
          <ShapeElement
            pos={index}
            key={index}
            bounds={parentSize} 

            Contents={() => <MyReactNativeElement number={index} />}
          />
        );
      })}
    </div>
  );
}

export default MovableApp