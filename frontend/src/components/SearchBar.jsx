import React from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
    return (
        <nav className="navbar navbar-light justify-content-center">
            <Link to="/" className="navbar-brand">Ecatalog</Link>
            <form className="form-inline d-flex" style={{ width: '70%', marginLeft: '70px' }} onSubmit={event => event.preventDefault()}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" autoComplete="false" />
                <button className="btn btn-outline-success my-2 my-sm-0" style={{ marginLeft: '20px' }} type="submit">Search</button>
            </form>
        </nav>
    )
}

export default SearchBar