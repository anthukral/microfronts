import React, { useEffect } from "react";
//import { Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setProduct, product as productSelector } from "./store";
interface Product {
  product?: string;
  helpers?: {
    location: Location;
    state: {
      [k: string]: string;
    };
  };
}
export default function Product({ product, helpers }: Product) {
  const dispatch = useDispatch();

  //eslint-disable-next-block react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(setProduct(product));
  }, [product, dispatch]);

  const productStore = useSelector(productSelector);
  console.log(productStore)
  return (
    <>
      <h1>Product {product && <span>{product}</span>}</h1>
      {helpers && helpers.state && helpers.state.login && (
        <p>{JSON.stringify(helpers.state.login)}</p>
      )}
      <h1>You have searched for : {productStore}</h1>
    </>
  );
}
