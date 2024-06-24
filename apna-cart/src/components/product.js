import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3 d-flex justify-content-between align-items-center">
      <div className="col-2">
        <h2>{props.product.pName}</h2>
      </div>

      <div className="col-1">
        <h2>{props.product.pPrice}</h2>
      </div>

      <div className="btn-group col-2" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary" onClick={() => {props.increamentQtyFunc(props.index)}}>
          +
        </button>

        <button type="button" className="btn btn-primary">
        {props.product.pQuantity}
        </button>

        <button type="button" className="btn btn-primary" onClick={() => {props.decrementQtyFunc(props.index)}}>
          -
        </button>
        
      </div>

      <div className="col-3">
        <p>{props.product.pQuantity * props.product.pPrice}</p>
      </div>

      <div className="col-1">
        <button className="btn btn-danger" onClick={() => {props.removeCardFunc(props.index)}}>Remove</button>
      </div>
    </div>
  );
}
