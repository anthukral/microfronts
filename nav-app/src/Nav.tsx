import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";
import NavigationHelper from "./NavigationHelper";
export interface NavProps {
  searchQuery?: () => null;
  setQuery?: () => null;
  location: Location;
}
export default function Nav(props: NavProps) {
  const setQuery = ({ target }: EventTarget) => {
    if (props.searchQuery) {
      props.searchQuery(target.value);
    }
  };
  return (
    <MemoryRouter>
      <NavigationHelper location={props.location} />
      <Routes>
        <Route path="/" element={<Home setQuery={setQuery} />} />
        <Route path="/login" element={<Login />} />
        <Route path="" element={<NotFound />} />
      </Routes>
    </MemoryRouter>
  );
}
