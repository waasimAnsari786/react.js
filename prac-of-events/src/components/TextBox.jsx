import React, { useState } from "react";

export default function TextBox() {
  const [text, setText] = useState("click me");
  const [bgColor, setBgColor] = useState("#31465E");

  const styleOfBody = {
    backgroundColor: bgColor,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const updTxtOnCLick = () => {
    let newBgColor = "#924FAB";
    let newText = "oouch 👞";
    setBgColor(newBgColor);
    setText(newText);
  };

  const updTxtOnDblCLick = () => {
    let newBgColor = "#31465E";
    let newText = "ayyo 👩‍🍼";
    setBgColor(newBgColor);
    setText(newText);
  };

  const updTxtOnMouseOver = () => {
    let newBgColor = "#31465E";
    let newText = "click me";
    setBgColor(newBgColor);
    setText(newText);
  };

  const styleOfBtn = {
    backgroundColor: "#924FAB",
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    border : '.2rem solid white',
    padding : '1rem',
    fontSize : '1.5rem',
    borderRadius : '1rem',
  };
  return (
    <>
      <body style={styleOfBody} className="container-fluid">
        <div className="col-2 text-box text-center">
          <p className="text"></p>
          <button
            style={styleOfBtn}
            className="my-btn"
            onClick={updTxtOnCLick}
            onDoubleClick={updTxtOnDblCLick}
            onMouseOver={updTxtOnMouseOver}
          >
            {text}
          </button>
        </div>
      </body>
    </>
  );
}
