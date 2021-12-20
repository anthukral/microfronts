import React from "react";
//import { Routes } from "react-router-dom";
interface Product {
  product?: string;
}
export default function Product({ product }: Product) {
  return (
    <>
      <h1>Product {product}</h1>
    </>
  );
}
