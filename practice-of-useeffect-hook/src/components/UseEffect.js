import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.title = `chats(${count})`;
  } , [count]);

  useEffect(() => {
    document.title = `You clicked me (${num}) times`;
    alert("i'm clicked");
  } , [num]);

  return (
    <div className="main-div">
      <h1 className="heading">useEffects {num}</h1>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>

      <button
        className="btn"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}