import React from "react";
import { useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { changeSearch } from "../redux/actions/actions";

const SearchBar = ({ search }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const inputChangeHandler = event => {
        dispatch(changeSearch(event.target.value))
    }

    const submitHandler = event => {
        if (search !== '') {
            history.push(`/search?=${search}`)
            dispatch(changeSearch(''))
        }
        // history.goBack()
        event.preventDefault()
    }

    return (
        <nav className="navbar navbar-light justify-content-center">
            <Link to="/" className="navbar-brand" onClick={() => dispatch(changeSearch(''))}>Ecatalog</Link>
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

const mapStateToProps = state => {
    return {
        search: state.search.search
    }
}

export default connect(mapStateToProps, null)(SearchBar)