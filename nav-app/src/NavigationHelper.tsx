import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavProps } from "./Nav";

export default function NavigationHelper({ helpers }: NavProps) {
  const localLocation = useLocation();
  const naviagtion = useNavigate();

  const updateRouting = () => {
    if (
      helpers &&
      helpers.location &&
      localLocation &&
      helpers.location.pathname !== localLocation.pathname
    ) {
      naviagtion(helpers.location.pathname);
    }
  };

  const updatePath = () => {
    if (helpers && localLocation.pathname !== helpers.location.pathname) {
      helpers.navigator(localLocation.pathname);
    }
  };
  //eslint-disable-next-block react-hooks/exhaustive-deps
  {
    useEffect(updateRouting, [helpers?.location]);
    useEffect(updatePath, [localLocation]);
  }
  return <> </>;
}
