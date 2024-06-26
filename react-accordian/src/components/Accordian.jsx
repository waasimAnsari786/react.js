import React from "react";
import AccQuestion from "./AccQuestion.jsx";
import accData from "./AccData.jsx";

export default function Accordian() {
  return (
    <>
      <div className="col-5 my-accordian p-4">
        <h1 className="heading mb-5">react accordian</h1>
        {accData.map((curElem, i) => {
          return <AccQuestion ques={curElem.ques} answer={curElem.ans} key = {i}/>;
        })}
      </div>
    </>
  );
}
