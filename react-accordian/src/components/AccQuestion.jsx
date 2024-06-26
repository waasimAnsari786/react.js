import React, { useState } from "react";

const styleOfBtn = {
  backgroundColor: "white",
  color: "#282c34",
  fontSize: "1rem",
  border: "none",
  borderRadius: "100%",
  boxShadow: ".2rem .3rem 1rem rgba(128, 128, 128, 0.699)",
};

export default function AccQuestion(props) {
  const [count, setCount] = useState(1);

  const changeIcon = () => {
    if (count === 1) {
      setCount(0);
    } else {
      setCount(1);
    }
  };

  return (
    <>
      <div className="col-12 acc-ques-ans-div mt-3">
        <div className="col-12 acc-ques">
          <div className="row">
            <div className="col-1 me-4">
              <button
                className="acc-add-btn d-flex justify-content-center align-items-center p-1"
                onClick={changeIcon}
                style={styleOfBtn}
              >
                {count === 1 ? (
                  <i class="fa-solid fa-add"></i>
                ) : (
                  <i class="fa-solid fa-minus"></i>
                )}
              </button>
            </div>
            <div className="col-9">
              <p>{props.ques}</p>
            </div>
          </div>
        </div>

        <div className="col-12 acc-ans">
          <div className="col-10 ms-auto">
            {count === 0 ? <p>{props.answer}</p> : ""}
          </div>
        </div>
      </div>
    </>
  );
}