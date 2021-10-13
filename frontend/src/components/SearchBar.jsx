import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const SearchBar = ({ search, setSearch }) => {

    const history = useHistory()

    const inputChangeHandler = event => {
        setSearch(event.target.value)
    }

    const submitHandler = event => {
        history.push(`/search?=${search}`)
        // history.goBack()
        setSearch('')
        event.preventDefault()
    }

    return (
        <nav className="navbar navbar-light justify-content-center">
            <Link to="/" className="navbar-brand" onClick={() => setSearch('')}>Ecatalog</Link>
            <form
                className="form-inline d-flex"
                style={{ width: '70%', marginLeft: '70px' }}
                onSubmit={submitHandler}
            >
                <input
                    className="form-control mr-sm-2"
                    value={search}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    autoComplete="false"
                    onClick={() => history.push('/search')}
                    onChange={inputChangeHandler}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" style={{ marginLeft: '20px' }} type="submit">Search</button>
            </form>
        </nav>
    )
}

export default SearchBar