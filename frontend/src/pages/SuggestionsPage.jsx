import React from "react";
import SearchSuggestions from "../components/search/SearchSuggestions";
import '../styles/suggestions.scss'

const SuggestionsPage = () => {
    return (
        <>
            <hr className="hr-top" />
            <SearchSuggestions />
            <hr className="hr-bottom" />
        </>
    )
}

export default SuggestionsPage