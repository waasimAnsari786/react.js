import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import ProductList from "./components/productList";
import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem.js"

function App() {
  const products = [
    {
      pName: "IPhone",
      pPrice: 999999,
      pQuantity: 0,
    },

    {
      pName: "OPPO",
      pPrice: 99999,
      pQuantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const increamentQty = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].pQuantity++;
    newTotalAmount += newProductList[index].pPrice;

    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQty = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    if (newProductList[index].pQuantity > 0) {
      newProductList[index].pQuantity--;
      newTotalAmount -= newProductList[index].pPrice;
    }

    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetCardFunc = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.pQuantity = 0;
    });

    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeCardFunc = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].pQuantity * newProductList[index].pPrice;
    newProductList.splice(index , 1);

    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItemFunc = (pName , pPrice) => {
    let newProductList = [...productList];
    newProductList.push({
      pName,
      pPrice,
      pQuantity : 0,
    });

    setProductList(newProductList);
  };

  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <AddItem addItemFunc = {addItemFunc}/>
        <ProductList
          myProducts={productList}
          increamentQtyFunc={increamentQty}
          decrementQtyFunc={decrementQty}
          removeCardFunc = {removeCardFunc}
        />
      </main>
      <Footer totalAmount={totalAmount} resetCardFunc={resetCardFunc} />
    </React.Fragment>
  );
}

export default App;
