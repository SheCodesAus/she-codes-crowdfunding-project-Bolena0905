import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "./studentlogo.jpg"

function Nav() {
    return (
        <nav >
        <div className="header">
        <img className="imag-nav" src={logo} alt="the logo" />
        <Link to="/"></Link>
        </div>
        <div className="navs">
        <Link id="anav" to="/">Home page</Link>
        <Link id="anav" to="/login">Login</Link>
        <Link id="anav" to="/Category">Category</Link>
        <Link id="anav" to="/users/register/">Register</Link>
        <Link id="anav" to="/project/create">Create new project</Link>
        </div>
        </nav>
    );
}
export default Nav;