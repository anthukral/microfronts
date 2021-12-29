import React,{useContext} from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import NavigationHelper from "./NavigationHelper";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";
import Utils from "../../microfrontend-utils";

export interface ReducerType {
  [x: string]: string;
}

export interface NavProps {
  searchQuery?: () => null;
  setQuery?: () => null;
  helpers: {
    location: Location;
    navigator: (x: string) => null;
    dispatch: (x: ReducerType) => null;
  };
}
export default function Nav(props: NavProps) {
  const ThemeContext=Utils.getContext("ThemeContext");
  

 const ctx=useContext(ThemeContext?ThemeContext:{});

 
  const setQuery = ({ target }: EventTarget) => {
    if (props.searchQuery) {
      props.searchQuery(target.value);
    }
  };
  return (
    <MemoryRouter>
      <NavigationHelper {...props} />
      <Home setQuery={setQuery} />
    <h1> Style from context is <i className={Object.values(ctx).join(" ")}> {Object.values(ctx).join(" , ")}</i></h1>
      <Routes>
        <Route
          path="/login"
          element={<Login dispatch={props.helpers?.dispatch} />}
        />
        <Route path="" element={<NotFound />} />
      </Routes>
    </MemoryRouter>
  );
}
