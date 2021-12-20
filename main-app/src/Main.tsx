import React, { useState, Suspense } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { stateSelector, update } from "./store";
import { Product, Footer, Nav } from "./imports";
import routes from "./shared/routes";
export default function Main() {
  const location = useLocation();
  const navigator = useNavigate();
  const [queryedProduct, setQuery] = useState(null);
  console.log(useSelector(stateSelector));
  const dispatch = useDispatch();

  return (
    <>
      <Suspense fallback={"loading"}>
        <Nav searchQuery={setQuery} helpers={{ location, navigator }} />
        <h1>Nykaa Fashion</h1>
        <Product product={queryedProduct} location={location} />

        <Routes>
          {routes.map((i) => (
            <Route key={i.path} path={i.path} element={i.element} />
          ))}
        </Routes>
        <Footer location={location} />
        <Link
          to="/login"
          onClick={() => {
            console.log("clicck");
            dispatch(update({ act: "click", value: "login clicked" }));
          }}
        >
          Login Mainss
        </Link>
      </Suspense>
    </>
  );
}
