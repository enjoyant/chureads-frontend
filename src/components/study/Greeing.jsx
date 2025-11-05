//rafce  <-- 리엑트 기본구문 자동완성 키
import React from "react";

//props로 데이터 받아옴
const Greeing = ({ username = "사용자" }) => {
  return <div className="greeting">안녕하세요. {username}님!</div>;
};

export default Greeing;
