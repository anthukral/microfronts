import React, { useState, Suspense, useEffect } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { stateSelector, update } from "./store";
import { Product, Footer, Nav ,shared} from "./imports";
import routes from "./shared/routes";
import ContextTest from "./ContextTest";

export default function Main() {
  const [theme, setTheme]=useState(0);
  const location = useLocation();
  const navigator = useNavigate();
  const [queryedProduct, setQuery] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector(stateSelector);
  const [sharedResource, setShared]=useState(null)
  
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
useEffect(()=>{
  shared.then(result=>{
    if(result){
    setShared(result.default());
   result.default().addEvents((
      (i)=>dispatch(update({act:i.key, value:i.value}))
      ),"login")
    }
  })
},[dispatch]);

return (
      <Suspense fallback={"loading"}>
        
        <Nav
          searchQuery={setQuery}
          helpers={{ location, navigator, dispatch }}
        />
        <hr/>
        <h1>Nykaa Fashion</h1>
        <span>Shared Resources available : {sharedResource && Object.keys(sharedResource.state).length}</span>
        <span>Shared Resources  : {sharedResource && JSON.stringify(sharedResource.get("login"))}</span>
        <h1>{JSON.stringify(state)}</h1>
        <br/>
        <button onClick={themeChange}> Change theme</button>
        <hr/>
        <Product product={queryedProduct} helpers={{ location, state }} />
        <hr/>
        <p>Route Layout of main app</p>
        <Routes>
          {routes.map((i) => (
            <Route key={i.path} path={i.path} element={i.element} />
          ))}
        </Routes>
        <hr/>
        <Footer location={location} />
        <hr/>
<button className="btn btn-outline-primary">
        <Link
          to="/login"
          onClick={() => {
            dispatch(update({ act: "click", value: "login clicked" }));
          }}
        >
          Login
        </Link>
        </button>
        <hr/>  
<ContextTest />
      </Suspense>
  );
}
