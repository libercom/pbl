import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SearchBar from "./components/search/SearchBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import SuggestionsPage from "./pages/SuggestionsPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import './styles/main.scss'

const App = () => {
    return (
        <Router>
            <div className="container">
                <SearchBar />
                <Switch>
                    <Route path='/search'>
                        <SuggestionsPage />
                    </Route>
                    <Route path='/:category'>
                        <CategoryPage />
                    </Route>
                    <Route path='/'>
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router >
    )
}

export default App