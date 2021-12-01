import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useGetSearchQuery } from "../../store/queries/products.js";
import { changeSearch } from "../../store/reducers/searchSlice.js";
import Loading from "../others/Loading.jsx";
import NotFound from "../others/NotFound.jsx";

const SearchSuggestions = () => {
    const [skip, setSkip] = useState(true)
    const [isTyping, setIsTyping] = useState(false)
    const [sortedSuggestions, setSortedSuggestions] = useState([])
    const search = useSelector(state => state.search.search)
    const dispatch = useDispatch()

    // search requests optimization

    useEffect(() => {
        if (!search) {
            setIsTyping(false) // when the input is empty, set isTyping false in order to show nothing
            return
        }

        !isTyping && setIsTyping(true)

        // delay of 0.5 seconds to send a request to the server

        const skipingDelay = setTimeout(() => {
            setSkip(false)
        }, 500)

        // delay of 0.6 seconds to render the search suggestions, or a message, if we got an error

        const isTypingDelay = setTimeout(() => {
            setIsTyping(false)
        }, 600)

        return () => {

            // clear the timeouts, in order to not change the state when the component is unmounted

            clearTimeout(skipingDelay)
            clearTimeout(isTypingDelay)
        }
    }, [search])

    // send request to the server

    const { data: suggestions, error, isFetching } = useGetSearchQuery(search, { skip })

    // sort the response's result

    useEffect(() => {
        suggestions && setSortedSuggestions([...suggestions].sort(comparator))
        setSkip(true)
    }, [suggestions])

    // order of the elements in the response's result

    const comparator = (a, b) => {
        const res = a.name.toLowerCase().indexOf(search.toLowerCase()) - b.name.toLowerCase().indexOf(search.toLowerCase())

        return res === 0 ? a.name.localeCompare(b.name) : res
    }

    // handler for clearing the input when going to another page

    const clearInput = () => {
        if (search) {
            dispatch(changeSearch(''))
        }
    }

    return (
        <>
            {isTyping || isFetching ? <div className="section_suggestions">
                <Loading />
            </div> :
                suggestions && suggestions.length === 0 && search ? <div className="section_suggestions">
                    <NotFound />
                </div> :
                    <div className="section_suggestions">
                        <div className="suggestions">
                            {search && sortedSuggestions.map((suggestion, i) => {
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