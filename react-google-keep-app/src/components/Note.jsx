import React, { useState } from "react";
import AddedNote from "./AddedNote.jsx";
import Icon from "./Icon.jsx";

const obj = {
  note: "",
  title: "",
};

export default function Note() {
  const [val, setVal] = useState(obj);
  const [insComp, setInsComp] = useState([]);

  const getVal = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setVal((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  const addNoteDivFunc = () => {
    setInsComp((prevVal) => {
      return [...prevVal, val];
    });
  };

  const deleteNote = (id) => {
    setInsComp((prevVal) => prevVal.filter((curVal, i) => i !== id));
  };

  return (
    <>
      <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-7 col-8 note-div">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Title"
            className="title-inp w-100"
            onChange={getVal}
            name="title"
          />

          <button className="add-note-btn" onClick={addNoteDivFunc}>
            <Icon icon={<i className="fa-solid fa-plus add-icon"></i>} />
          </button>
          <textarea
            name="note"
            placeholder="Type Your Note..."
            onChange={getVal}
            className="note-inp w-100"
          ></textarea>
        </form>
      </div>

      <div className="container mt-5">
        <div className="row">
          {insComp.map((curVal, i) => {
            return (
              <AddedNote
                valuesOfInps={curVal}
                key={i}
                deleteNoteFunc={deleteNote}
                id={i}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
