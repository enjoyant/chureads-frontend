import React, { useState } from "react";

const Counter = () => {
  // logic
  //데이터, set함수
  const [count, setCount] = useState(0); //기본값 필요

  const handleIncrease = () => {
    setCount(count + 1);
    console.log("🚀 ~ handleIncrease ~ count:", count);
  };

  const handleDecrease = () => {
    setCount(count - 1);
    console.log("🚀 ~ handleDecrease ~ count:", count);
  };

  // view
  return (
    <div>
      <h1>{count}</h1>
      <button
        type="button"
        style={{ border: "4px solid yellow" }}
        onClick={handleIncrease}
      >
        +1
      </button>
      <button
        type="button"
        style={{ border: "4px solid green" }}
        onClick={handleDecrease}
      >
        -1
      </button>
    </div>
  );
};

export default Counter;
