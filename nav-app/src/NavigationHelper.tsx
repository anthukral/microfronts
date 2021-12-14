import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
interface NavigationHelperProps {
  location: Location;
}
export default function NavigationHelper({ location }: NavigationHelperProps) {
  const localLocation = useLocation();
  const naviagtion = useNavigate();
  useEffect(() => {
    if (
      location &&
      localLocation &&
      location.pathname !== localLocation.pathname
    ) {
      naviagtion(location.pathname);
    }
  }, [location, localLocation, naviagtion]);
  return <></>;
}
