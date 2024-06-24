import React from 'react'
import Heading from './Heading'

export default function Card(props) {
  return (
    <>
        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-8 col-9 mx-auto mt-5'>
            <div className='col-12 card-mb'>
                <div className="col-12 card-img">
                    <img src={props.cImg} alt="random pics" className='w-100' />
                </div>
                <Heading text = {props.cName}/>
                <p className="card-title">{props.cTitle}</p>
                <a href={props.cLink} target='_blank' rel="noreferrer">
                    <button className="card-btn">click here</button>
                </a>
            </div>
        </div>
    </>
  )
}
