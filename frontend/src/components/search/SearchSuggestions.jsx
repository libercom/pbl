import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
    changeSearch,
    getSuggestions,
    clearSuggestions
} from "../../redux/actions/actions.js";

const SearchSuggestions = ({ search, suggestions, changeSearch, getSuggestions, clearSuggestions }) => {
    const [timer, setTimer] = useState(null)

    useEffect(() => {
        let isSubscribed = true;

        if (timer) {
            clearInterval(timer)
        }

        setTimer(
            setTimeout(() => {
                if (search.length > 0) {
                    getSuggestions(search)
                } else {
                    if (suggestions.length > 0) {
                        clearSuggestions()
                    }
                }
            }, 500)
        )

        return () => {
            isSubscribed = false

            clearSuggestions()
        }

    }, [search])

    const clearInput = () => {
        if (search) {
            changeSearch('')
        }
    }

    return (
        <div className="section_suggestions">
            <div className="suggestions">
                {suggestions.map((el, i) => {
                    return (
                        <Link
                            className="suggestion"
                            key={i}
                            to={'/' + el.name}
                            onClick={clearInput}
                        >
                            <img src={el.img} alt="" className="suggestion-img" />
                            <div className="suggestion-info">
                                <span className="suggestion-name"><b>{el.name.substr(0, el.name.indexOf(' '))}</b> {el.name.substr(el.name.indexOf(' '))}</span>
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

const mapDispatchToProps = {
    changeSearch,
    getSuggestions,
    clearSuggestions
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSuggestions)