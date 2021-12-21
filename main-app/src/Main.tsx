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
  const [theme, setTheme]=useState(0);
  const location = useLocation();
  const navigator = useNavigate();
  const [queryedProduct, setQuery] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector(stateSelector);
  const ctx = useContext(ThemeContext);
  useEffect(() => {
    ctx && ctx[1] ? ctx[1]("somethign") : "";
  }, [ctx]);

  const channel = new BroadcastChannel("theme");
window.__channel=channel;

const themeChange=()=>{
  const themes=["light", "dark", "white", "grey", "sleep"]
  if(theme===themes.length-1){
    setTheme(0);
  }else{
    setTheme(theme+1)
  }
window.__channel.postMessage(themes[theme]);

}

  return (
    <>
      <Suspense fallback={"loading"}>
        <Nav
          searchQuery={setQuery}
          helpers={{ location, navigator, dispatch }}
        />
        <hr/>
        <h1>Nykaa Fashion</h1>
        <button onClick={themeChange}> Change theme</button>
        <hr/>
        <Product product={queryedProduct} helpers={{ location, state }} />
        <hr/>
        <Routes>
          {routes.map((i) => (
            <Route key={i.path} path={i.path} element={i.element} />
          ))}
        </Routes>
        <hr/>
        <Footer location={location} />
        <hr/>
        <Link
          to="/login"
          onClick={() => {
            console.log("clicck");
            dispatch(update({ act: "click", value: "login clicked" }));
          }}
        >
          Login
        </Link>
        <hr/>        
      </Suspense>
    </>
  );
}
