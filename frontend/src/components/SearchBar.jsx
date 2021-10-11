import React from "react";

const SearchBar = () => {
    return (
        <nav className="navbar navbar-light justify-content-center">
            <form className="form-inline d-flex" style={{ width: '70%' }} onSubmit={event => event.preventDefault()}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" autoComplete="false" />
                <button className="btn btn-outline-success my-2 my-sm-0" style={{ marginLeft: '20px' }} type="submit">Search</button>
            </form>
        </nav>
    )
}

export default SearchBar