import React, { useState, Suspense, useContext, useEffect } from "react";
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
import { ThemeContext } from "./shared/Observable";
export default function Main() {
  const location = useLocation();
  const navigator = useNavigate();
  const [queryedProduct, setQuery] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector(stateSelector);
  const ctx = useContext(ThemeContext);
  useEffect(() => {
    ctx && ctx[1] ? ctx[1]("somethign") : "";
  }, [ctx]);
  return (
    <>
      <Suspense fallback={"loading"}>
        <Nav
          searchQuery={setQuery}
          helpers={{ location, navigator, dispatch }}
        />
        <h1>Nykaa Fashion</h1>
        <Product product={queryedProduct} helpers={{ location, state }} />

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
