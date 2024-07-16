import React, { useContext } from "react";
import { FName, LName } from "../App";

export default function CompC() {
  const fName = useContext(FName);
  const lName = useContext(LName);
  return (
    <>
      <h1 className="heading">My name is {fName} {lName}</h1>;
    </>
  );
}