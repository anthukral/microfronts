import React, { useState, Suspense } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Product, Footer, Nav } from "./imports";
import routes from "./shared/routes";
export default function Main() {
  const location = useLocation();
  const [queryedProduct, setQuery] = useState(null);
  return (
    <>
      <Suspense fallback={"loading"}>
        <Nav searchQuery={setQuery} location={location} />
        <h1>Nykaa Fashion</h1>
        <Product product={queryedProduct} location={location} />

        <Routes>
          {routes.map((i) => (
            <Route key={i.path} path={i.path} element={i.element} />
          ))}
        </Routes>
        <Footer location={location} />
        <Link to="/login">Login Mainss</Link>
      </Suspense>
    </>
  );
}
