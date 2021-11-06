import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
    changeSearch,
    getSuggestions,
    clearSuggestions,
    loadDetails,
    setLoading,
    resetLoading
} from "../../redux/actions/actions.js";

const SearchSuggestions = ({ search, suggestions, loading, changeSearch, getSuggestions, clearSuggestions, setLoading, resetLoading }) => {
    const [timer, setTimer] = useState(null)

    useEffect(() => {
        let isSubscribed = true;

        if (timer) {
            clearInterval(timer)
        }

        if (search.length > 0 && !loading) {
            setLoading()
        }

        setTimer(
            setTimeout(() => {
                if (search.length > 0) {
                    getSuggestions(search)
                } else {
                    if (suggestions.length > 0) {
                        clearSuggestions()

                        resetLoading()
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

    const comparator = (a, b) => {
        const res = a.name.toLowerCase().indexOf(search.toLowerCase()) - b.name.toLowerCase().indexOf(search.toLowerCase())

        return res === 0 ? a.name.localeCompare(b.name) : res
    }

    return (
        <>
            {loading ? <div className="section_suggestions"></div> :
                <div className="section_suggestions">
                    <div className="suggestions">
                        {suggestions.sort(comparator).map((suggestion, i) => {
                            return (
                                <Link
                                    className="suggestion"
                                    key={i}
                                    to={'/' + suggestion.category.toLowerCase() + '/' + suggestion.name.toLowerCase().replaceAll('-', '_').replaceAll(' ', '-')}
                                    onClick={clearInput}
                                >
                                    <img src={suggestion.img} alt="" className="suggestion-img" />
                                    <div className="suggestion-info">
                                        <span className="suggestion-name"><b>{suggestion.name.substr(0, suggestion.name.indexOf(' '))}</b> {suggestion.name.substr(suggestion.name.indexOf(' '))}</span>
                                        <span className="suggestion-price">De la <b>{suggestion.starting_price}</b> lei</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        search: state.search.search,
        suggestions: state.search.suggestions,
        loading: state.loading.loading
    }
}

const mapDispatchToProps = {
    changeSearch,
    getSuggestions,
    clearSuggestions,
    loadDetails,
    setLoading,
    resetLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSuggestions)