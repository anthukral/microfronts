import React from "react";
// import { Observable } from "windowed-observable";
// import { useLocation, useNavigate } from "react-router-dom";
interface WrapperComponent {
  children: React.Component;
}
export default function ObservableWrapper({ children }: WrapperComponent) {
  //   const location = useLocation();
  //   const observale = new Observable("location");
  //   useEffect(() => {}, [location.pathname]);

  return <>{children}</>;
}
