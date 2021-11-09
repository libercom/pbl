import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { changeSearch } from "../../store/reducers/searchSlice.js";
import '../../styles/searchbar.scss'


const SearchBar = () => {
    const history = useHistory()
    const location = useLocation()
    const search = useSelector((state) => state.search.value)
    const dispatch = useDispatch()

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

    const clearInput = () => {
        if (search) {
            dispatch(changeSearch(''))
        }
    }

    const redirectHomeHandler = () => {
        if (location.pathname !== '/') {
            history.push('/')
            clearInput()
        }
    }

    const redirectBackHandler = () => {
        history.goBack()

        clearInput()
    }

    const redirectSearchHandler = () => {
        history.push('/search')
    }

    return (
        <div className="header">
            <div className="logo" onClick={redirectHomeHandler}>
                Ecatalog
            </div>
            <form onSubmit={submitHandler}>
                <div className="input">
                    <input
                        placeholder="Ce căutați?"
                        type="text"
                        value={search || ""}
                        onClick={redirectSearchHandler}
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

// const mapStateToProps = state => {
//     return {
//         search: state.search.search
//     }
// }

// const mapDispatchToProps = {
//     changeSearch
// }

export default SearchBar