import React from 'react'

export default function MyTime(props) {
  return (
    <>
        <p>Current Time is {props.dateObj.toLocaleTimeString()}</p>
    </>
  )
}
