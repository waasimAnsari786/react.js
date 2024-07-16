import React from "react";
import Icon from "./Icon.jsx";

export default function AddedNote({ valuesOfInps, deleteNoteFunc, id }) {
  return (
    <>
      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-3" id={id}>
        <div className="col-12 added-note-div">
          <p className="title">{valuesOfInps.title}</p>
          <p className="note">{valuesOfInps.note}</p>
          <button className="add-note-btn" onClick={() => deleteNoteFunc(id)}>
            <Icon icon={<i className="fa-solid fa-trash add-icon"></i>} />
          </button>
        </div>
      </div>
    </>
  );
}