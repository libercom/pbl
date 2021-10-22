import React from "react";
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import SearchBar from "./components/search/SearchBar.jsx";
import HomePage from "./router/HomePage.jsx";
import SuggestionsPage from "./router/SuggestionsPage.jsx";
import DetailsPage from "./router/DetailsPage.jsx";
import './styles/main.scss'

const App = ({ devices }) => {
    return (
        <Router>
            <div className="container">
                <SearchBar />
                <Switch>
                    {SuggestionsPage()}
                    {DetailsPage({ devices })}
                    {HomePage()}
                </Switch>
            </div>
        </Router>
    )
}

const mapStateToProps = state => {
    return {
        devices: state.devices.devices,
    }
}

export default connect(mapStateToProps, null)(App)