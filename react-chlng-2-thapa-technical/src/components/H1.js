import React from 'react'
import MyDate from './MyDate.js'

export default function H1() {
    const fName = 'Waasim';
    const lName = 'Ansari';
  return (
    <>
        <h1>{`Hello, My name is ${fName} ${lName}`}</h1>
        <MyDate />
    </>
  )
}
