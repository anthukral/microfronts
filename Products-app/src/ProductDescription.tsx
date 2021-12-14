import React from "react";
interface ProductDescriptionProps {
  product?: string;
}
export default function ProductDescription({
  product,
}: ProductDescriptionProps) {
  return (
    <>
      {" "}
      <h1> Product page</h1>
      {product && <span> You searched for {product}</span>}
    </>
  );
}
