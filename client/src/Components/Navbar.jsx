import React from "react";
import "./Navbar.css";

export const Navbar = () => {
    return <nav className="nav">
        <a href="/" className="site-title">Site Name</a>
        <ul>
            <li>
                <a href="/register">Register</a>
            </li>
            <li>
                <a href="/Login">Login</a>
            </li>
            <li>
                <a href="/Survey">Survey</a>
            </li>
        </ul>
    </nav>
}