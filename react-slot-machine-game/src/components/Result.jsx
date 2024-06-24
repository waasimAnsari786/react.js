import React from "react";

export default function Result(props) {
  let emj1 = props.emojis[0];
  let emj2 = props.emojis[1];
  let emj3 = props.emojis[2];

  if (emj1 === emj2 && emj2 === emj3) {
    return (
      <>
        <h3 className="result">this is matching</h3>
      </>
    );
  }

  else{
    return (
        <>
          <h3 className="result">this is not matching</h3>
        </>
      );
  }
}
