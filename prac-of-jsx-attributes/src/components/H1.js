import React from 'react'

// inline styling
const headingStyle = {
    color: 'blue',
    textAlign: 'center',
    textShadow: '.2rem .5rem .4rem #282c34',
    margin: '1rem 0',
    fontFamily: "'Jost' , 'sans-serif'",
}

export default function H1() {
    const name = 'Waasim Ansari'
  return (
    <>
        <h1 style={headingStyle}>{`My name is ${name}`}</h1>
    </>
  )
}
