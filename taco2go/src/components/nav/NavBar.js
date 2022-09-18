import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Find A Taco</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/buildataco">Build A Taco</Link>
            </li>
        </ul>
    )
}