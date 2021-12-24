import React from "react";
import { NavProps } from "./Nav";
import { Link } from "react-router-dom";
export const Home = ({ setQuery }: NavProps) => (
  <div className="container">
    <h1>Nykaa navigation</h1>
    <input type="text" placeholder="search any item here" onChange={setQuery} />
    <Link className="btn btn-outline-primary" to="/login">Login</Link>
  </div>
);

export default Home;
