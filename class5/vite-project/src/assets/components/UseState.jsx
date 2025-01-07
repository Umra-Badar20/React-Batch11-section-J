import React from "react";
import { useState } from "react";

const UseState = () => {
  let [counter, setCounter] = useState(0);
  let addvalue = () => {
    setCounter(counter + 1);
  };
  let removeValue = () => {
    setCounter(counter - 1);
  };
  let resetValue = () => {
    setCounter((counter = 0));
  };
  return (
    <>
      <h1>counter</h1>
      <p>value:{counter}</p>
      <button onClick={addvalue}>add value</button>
      <button onClick={removeValue}>remove</button>
      <button onClick={resetValue}>rest</button>
    </>
  );
};

export default UseState;
