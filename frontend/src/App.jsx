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
import WishlistPage from "./pages/WishlistPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

const App = () => {
    return (
        <Router>
            <div className="container">
                <SearchBar />
                <Switch>
                    <Route path='/search'>
                        <SuggestionsPage />
                    </Route>
                    <Route path='/login'>
                        <LoginPage />
                    </Route>
                    <Route path='/signup'>
                        <SignupPage />
                    </Route>
                    <Route path='/wishlist'>
                        <WishlistPage />
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