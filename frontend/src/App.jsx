import React, { useEffect } from "react";
import { useDispatch, connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NavBar from "./components/home/NavBar.jsx";
import PopularProducts from "./components/home/PopularProducts.jsx";
import Sponsors from "./components/home/Sponsors.jsx";
import SearchBar from "./components/search/SearchBar.jsx";
import SearchSuggestions from './components/search/SearchSuggestions.jsx'
import MouseDetails from "./components/details/MouseDetails.jsx";
import LaptopDetails from "./components/details/LaptopDetails.jsx";
import MonitorDetails from "./components/details/MonitorDetails.jsx";
import { loadDevices } from './redux/actions/actions.js';
import './styles/home.scss'
import './styles/suggestions.scss'
import './styles/details.scss'

const App = ({ devices }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadDevices())
    }, [])

    return (
        <Router>
            <div className="container">
                <SearchBar />
                <Switch>
                    <Route path='/search'>
                        <hr className="hr-top" />
                        <SearchSuggestions />
                        <hr className="hr-bottom" />
                    </Route>
                    {devices.map((el, i) => {
                        return (
                            <Route key={i} path={'/' + el.name.replaceAll(' ', '+')}>
                                {(el.category === 'Laptops') ?
                                    <LaptopDetails laptop={el} />
                                    : (el.category === 'Mouses') ?
                                        <MouseDetails mouse={el} /> :
                                        <MonitorDetails monitor={el} />}
                            </Route>
                        )
                    })}
                    <Route path='/'>
                        <NavBar />
                        <PopularProducts />
                        <Sponsors />
                    </Route>
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