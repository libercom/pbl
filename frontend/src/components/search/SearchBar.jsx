import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { changeSearch } from "../../store/reducers/searchSlice.js";
import '../../styles/searchbar.scss'


const SearchBar = () => {
    const element = useRef(null)
    const history = useHistory()
    const location = useLocation()
    const search = useSelector((state) => state.search.search)
    const dispatch = useDispatch()


    // handler for input change

    const inputChangeHandler = event => {
        dispatch(changeSearch(event.target.value))
    }

    // handler for going to the search results page

    const submitHandler = event => {
        if (search) {
            history.push(`/search?=${search}`)
            dispatch(changeSearch(''))
        }

        event.preventDefault()
    }

    // handler for clearing the input when going on another page

    const clearInput = () => {
        if (search) {
            dispatch(changeSearch(''))
        }
    }

    // handler for going on the main page when pressing the logo

    const redirectHomeHandler = () => {
        if (location.pathname !== '/') {
            history.push('/')
            clearInput()
        }
    }

    // handler for going back when pressing the clear input button

    const redirectBackHandler = () => {
        history.goBack()

        clearInput()
    }

    // handler for going to search suggestions page

    const redirectSearchHandler = () => {
        history.push('/search')
    }

    // handler for going back when pressing backspace with an empty input

    const redirectBackByKeyHandler = event => {
        const key = event.charCode || event.keyCode

        if (key === 8 && !search) {
            redirectBackHandler()
            element.current.blur()
        }

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
                        value={search}
                        ref={element}
                        onClick={redirectSearchHandler}
                        onChange={inputChangeHandler}
                        onKeyDown={redirectBackByKeyHandler}
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

export default SearchBar