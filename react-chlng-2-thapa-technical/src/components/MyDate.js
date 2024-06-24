import React from 'react'
import MyTime from './MyTime.js'

export default function MyDate() {
    const mydate = new Date()
  return (
    <>
        <p>Current Date is {mydate.toLocaleDateString()}</p>
        <MyTime dateObj = {mydate}/>
    </>
  )
}
