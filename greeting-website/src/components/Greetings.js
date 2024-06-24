import React from 'react'

export default function Greetings() {
    let sysTime = 14;
    let greetings = 0;
    // let sysTime = new Date().getHours()

    let styleObj = {};
    if (sysTime >= 1 && sysTime <= 11) {
        greetings = 'good morning'
        styleObj.color = 'green'
    }
    
    else if (sysTime > 11 && sysTime <= 19) {
        greetings = 'good afternoon'
        styleObj.color = 'orange'
    }
    
    else {
        greetings = 'good night'
        styleObj.color = 'black'
    }

  return (
    <>
        <h1 className='heading'>hello sir <span style={styleObj}>{greetings}</span></h1>
    </>
  )
}