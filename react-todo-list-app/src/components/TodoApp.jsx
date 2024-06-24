import React, { useState } from "react";
import ToDoList from './ToDoList.jsx'

export default function TodoApp() {
  const [inpVal, setInpVal] = useState("");
  const [itemArr , settItemArr] = useState([]);

  const getValue = (e) => {
		setInpVal(e.target.value);
	};

	const addToDoFunc = () => {
		settItemArr((prevVal) => {
			return [...prevVal , inpVal];
		});
	};

	const delToDoFunc = (id) => {
		settItemArr((prevVal) => {
			return [
				prevVal.filter((currVal , i) => {
					return id !== i;
				})
			];
		})
	};

  return (
    <>
      <div className="todo-app col-4 d-flex justify-content-center align-items-center flex-column p-3">
        <h1 className="heading">toDo list</h1>

        <div className="input-sec col-12 d-flex justify-content-evenly align-items-center">
          <input type="text" placeholder="type your item" onChange={getValue} />
          <button className="add-todo-btn" onClick={addToDoFunc}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>

				{
					itemArr.map((currVal , i) => {
						return <ToDoList item = {currVal} key = {i} id = {i} delItemFunc = {delToDoFunc}/>
					})
				}
      </div>
    </>
  );
}