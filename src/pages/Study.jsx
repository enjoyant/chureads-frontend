import React from "react";
import Greeing from "./../components/study/Greeing";
import Counter from "../components/study/Counter";

const Study = () => {
  return (
    <div>
      <Greeing />
      <Greeing username="김도훈" />
      <Greeing username="김광수" />
      <Counter />
    </div>
  );
};

export default Study;
