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
  const ThemeContext=Utils.getContext("ALL");
  console.log("THEME CONTEXT", ThemeContext)

 const ctx=useContext(ThemeContext?ThemeContext:{});

  console.log(ctx);
 
  const setQuery = ({ target }: EventTarget) => {
    if (props.searchQuery) {
      props.searchQuery(target.value);
    }
  };
  return (
    <MemoryRouter>
      <NavigationHelper {...props} />
      <Home setQuery={setQuery} />
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
