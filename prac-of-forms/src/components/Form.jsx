import React, { useState } from "react";

const elemOfForm = {
  fName: "",
  lName: "",
  email: "",
};

export default function Form() {
  const [inpVal, setInpVal] = useState(elemOfForm);

  const printInpVal = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInpVal((prevVal) => {
      return{
        ...prevVal,
        [name] : value,
      }
  })
  };

  const printValOnSubmit = (e) => {
    e.preventDefault();
    alert('data submited')
  };

  return (
    <>
      <div className="my-form text-center">
        <h1 className="heading">{`hello ${inpVal.fName} ${inpVal.lName}`}</h1>
        <h5 className="heading">{inpVal.email}</h5>
        <form onSubmit={printValOnSubmit}>
          <input
            className="mt-5"
            type="text"
            placeholder="enter your text"
            name="fName"
            onChange={printInpVal}
          />

          <input
            className="mt-5"
            type="password"
            placeholder="enter your password"
            name="lName"
            onChange={printInpVal}
          />

          <input
            className="mt-5 mb-5"
            type="email"
            placeholder="enter your email"
            name="email"
            onChange={printInpVal}
          />
          <button className="form-btn">submit</button>
        </form>
      </div>
    </>
  );
}
