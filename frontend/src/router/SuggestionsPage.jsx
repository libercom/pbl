import React from "react";
import { Route } from "react-router-dom";
import SearchSuggestions from "../components/search/SearchSuggestions";

const SuggestionsPage = () => {
    return (
        <Route
            path='/search'
            render={routeProps => (
                <>
                    <hr className="hr-top" />
                    <SearchSuggestions {...routeProps} />
                    <hr className="hr-bottom" />
                </>
            )}
        />
    )
}

export default SuggestionsPage