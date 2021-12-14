import React from "react";
import { Routes, Route } from "react-router-dom";
//import ProductDescription from "./ProductDescription";
interface Product {
  product?: string;
}
export default function Product({ product }: Product) {
  return (
    <>
      <Routes>
        <Route path="/login" element={<></>}></Route>
        {/* <Route
            path="/"
            element={<ProductDescription product={product} />}
          ></Route> */}
      </Routes>
      <h1>Product {product}</h1>
    </>
  );
}
