import React from "react";
import { NavLink } from "react-router-dom";
import './style.css'

export function Header() {
    const activeClass = (({ isActive }) =>
        isActive ? 'current' : 'navFont')


    return (
        <>
            <ul className="header">
                <NavLink className={activeClass} to="/" end>Home</NavLink>
                <NavLink className={activeClass} to="about" end>About Me</NavLink>
                <NavLink className={activeClass} to="projects" end>Projects</NavLink>
            </ul>
        </>


    );
}
