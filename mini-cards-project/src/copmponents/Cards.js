import React from "react";
import Card from "./Card.js";
import CardData from "./Data.js";
import Heading from "./Heading.js";

export default function Cards() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Heading text={"Top 5 items"}/>
          {CardData.map((curElem , index) => {
            return (
              <Card
                cName={curElem.cName}
                cTitle={curElem.cTitile}
                cImg={curElem.cImg}
                cLink={curElem.cLink}
                key = {index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
