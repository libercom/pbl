import React from "react";
import { useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { changeSearch, clearSuggestions } from "../../redux/actions/actions.js";

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

        event.preventDefault()
    }

    const clickHandler = () => {
        dispatch(changeSearch(''))
        dispatch(clearSuggestions())
    }

    const redirectBackHandler = () => {
        history.goBack()
        dispatch(changeSearch(''))
        dispatch(clearSuggestions())
    }

    return (
        <div className="header">
            <Link to="/" className="logo" onClick={clickHandler}>
                Ecatalog
            </Link>
            <form onSubmit={submitHandler}>
                <div className="input">
                    <input
                        placeholder="Ce căutați?"
                        type="text"
                        value={search}
                        onClick={() => history.push('/search')}
                        onChange={inputChangeHandler}
                    />
                    <button onClick={redirectBackHandler} type="button">
                        <span className="material-icons">
                            close
                        </span>
                    </button>
                </div>
                <button className="btn-search" type="submit">
                    <span className="material-icons">
                        search
                    </span>
                    <div>
                        Căutare
                    </div>
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        search: state.search.search
    }
}

export default connect(mapStateToProps, null)(SearchBar)