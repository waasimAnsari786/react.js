import React from "react";

export default function IMG() {
  const URL = "https://picsum.photos/300/300";
  const URL2 = "https://waasimansari786.github.io/waasim-s-portfolio/";
  return (
    <>
      <a href={URL2} target="_blank">
        <img src={URL} alt="random images" className="m-1" />
      </a>
    </>
  );
}
