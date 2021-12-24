import { lazy } from "react";
const Product = lazy(() => import("product/Products"));
const Nav = lazy(() => import("nav/App"));
const Footer = lazy(() => import("footer/Footer")); 

const shared=import("nav/SharedChannel")

export { Product, Nav, Footer ,shared};
