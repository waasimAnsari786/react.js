import React from "react";

export default function ToDoList(props) {
  return (
    <>
      <div className="item-sec text-start">
        <ul>
        <i className="fa-solid fa-xmark del-todo" onClick={() => {
            props.delItemFunc(props.key);
        }}></i>
          <li>{props.item}</li>
        </ul>
      </div>
    </>
  );
}