import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { NavProps } from "./Nav";
import NotFound from "./NotFound";

export default function NavigationHelper({ helpers, searchQuery }: NavProps) {
  const localLocation = useLocation();
  const naviagtion = useNavigate();
  const setQuery = ({ target }: EventTarget) => {
    if (searchQuery) {
      searchQuery(target.value);
    }
  };
  const updateRouting = () => {
    if (
      helpers.location &&
      localLocation &&
      helpers.location.pathname !== localLocation.pathname
    ) {
      naviagtion(helpers.location.pathname);
    }
  };

  const updatePath = () => {
    if (localLocation.pathname !== helpers.location.pathname) {
      helpers.navigator(localLocation.pathname);
    }
  };
  //eslint-disable-next-block react-hooks/exhaustive-deps
  {
    useEffect(updateRouting, [helpers.location]);
    useEffect(updatePath, [localLocation]);
  }
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<Home setQuery={setQuery} />} />
        <Route path="/login" element={<Login />} />
        <Route path="" element={<NotFound />} />
      </Routes>
    </>
  );
}
