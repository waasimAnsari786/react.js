import React from "react";
import Add from './Add.js'
import Sub from './Sub.js'
import Mul from './Mul.js'
import Divide from './Divide.js'

export default function List() {
  return (
    <>
      <ul>
        <li>{`sum of 2 numbers is ${Add(12, 2)}`}</li>
        <li>{`sub of 2 numbers is ${Sub(12, 2)}`}</li>
        <li>{`mul of 2 numbers is ${Mul(12, 2)}`}</li>
        <li>{`division of 2 numbers is ${Divide(12.3, 2.6)}`}</li>
      </ul>
    </>
  );
}
