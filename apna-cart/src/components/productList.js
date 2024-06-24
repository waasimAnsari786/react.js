import React from "react";
import Product from "./product";

export default function ProductList(props) {
  return(
    props.myProducts.length > 0 ?
    props.myProducts.map((currElem, i) => {
    return (
      <Product
        product={currElem}
        key={i}
        increamentQtyFunc={props.increamentQtyFunc}
        decrementQtyFunc={props.decrementQtyFunc}
        index={i}
        removeCardFunc={props.removeCardFunc}
      />
    )
  }) : <h1>No products exist in cart</h1>
);
}
