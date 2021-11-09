import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useGetSearchQuery } from "../../store/queries/products.js";
import { changeSearch } from "../../store/reducers/searchSlice.js";

const SearchSuggestions = () => {
    const [skip, setSkip] = useState(false)
    const [timer, setTimer] = useState(null)
    const [sortedSuggestions, setSortedSuggestions] = useState([])
    const search = useSelector(state => state.search.value) || ''
    const dispatch = useDispatch()

    useEffect(() => {
        if (timer) {
            setSkip(true)
            clearInterval(timer)
        }

        setTimer(
            setTimeout(() => {
                setSkip(false)
            }, 500)
        )
    }, [search])

    const { data: suggestions = [], error, isLoading: loading } = useGetSearchQuery(search, { skip })

    useEffect(() => {
        setSortedSuggestions([...suggestions].sort(comparator))
    }, [suggestions])

    const comparator = (a, b) => {
        const res = a.name.toLowerCase().indexOf(search.toLowerCase()) - b.name.toLowerCase().indexOf(search.toLowerCase())

        return res === 0 ? a.name.localeCompare(b.name) : res
    }

    const clearInput = () => {
        if (search) {
            dispatch(changeSearch(''))
        }
    }

    return (
        <>
            {loading ? <div className="section_suggestions"></div> :
                <div className="section_suggestions">
                    <div className="suggestions">
                        {sortedSuggestions && sortedSuggestions.map((suggestion, i) => {
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

export default SearchSuggestions