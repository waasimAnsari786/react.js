import React from 'react'

export default function Footer(props) {
  return (
    <React.Fragment>
        <div className='row fixed-bottom'>
            <div className="col-2">
                <button className='btn btn-danger w-100' onClick={() => {props.resetCardFunc()}}>Reset</button>
            </div>

            <div className="col-8 bg-dark text-light text-center">
                <p>{props.totalAmount}</p>
            </div>

            <div className="col-2">
            <button className='btn btn-primary w-100'>Pay Now</button>
            </div>
        </div>
    </React.Fragment>
  )
}
