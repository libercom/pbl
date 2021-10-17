import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom";
import {
    changeSearch,
    searchDevices,
    clearSuggestions
} from "../../redux/actions/actions.js";

const SearchSuggestions = ({ search, suggestions }) => {
    const dispatch = useDispatch()
    const [timer, setTimer] = useState(null)

    useEffect(() => {
        let isSubscribed = true;

        if (timer) {
            clearInterval(timer)
        }

        setTimer(
            setTimeout(() => {
                if (search.length > 0) {
                    dispatch(searchDevices(search))
                } else {
                    dispatch(clearSuggestions())
                }
            }, 500)
        )

        return () => isSubscribed = false
    }, [search])

    const clickHandler = () => {
        dispatch(changeSearch(''))
        dispatch(clearSuggestions())
    }

    return (
        <div className="section_suggestions">
            <div className="suggestions">
                {suggestions.map((el, i) => {
                    return (
                        <Link
                            className="suggestion"
                            key={i}
                            to={'/' + el.name.replaceAll(' ', '+')}
                            onClick={clickHandler}
                        >
                            <img src={el.img} alt="" className="suggestion-img" />
                            <div className="suggestion-info">
                                <span className="suggestion-name">{el.name}</span>
                                <span className="suggestion-price">De la <b>{el.starting_price}</b> lei</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        search: state.search.search,
        suggestions: state.search.suggestions
    }
}

export default connect(mapStateToProps, null)(SearchSuggestions)