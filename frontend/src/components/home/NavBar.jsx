import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <nav>
                <NavLink to='/laptops' activeClassName="selected">Laptopuri</NavLink>
                <NavLink to='/monitors' activeClassName="selected">Monitoare</NavLink>
                <NavLink to='/mouses' activeClassName="selected">Mouse-uri</NavLink>
            </nav>
        </div>
    )
}

export default NavBar