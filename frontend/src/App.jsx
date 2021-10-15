import React, { useEffect } from "react";
import { useDispatch, connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SearchBar from "./components/SearchBar.jsx";
import MouseDetails from "./components/MouseDetails.jsx";
import LaptopDetails from "./components/LaptopDetails.jsx";
import MonitorDetails from "./components/MonitorDetails.jsx";
import PopularProducts from "./components/PopularProducts.jsx";
import SearchSuggestions from './components/SearchSuggestions.jsx'
import Sponsors from "./components/Sponsors.jsx";
import { loadDevices } from './redux/actions/actions.js';

const App = ({ devices }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadDevices())
    }, [])

    return (
        <Router>
            <div className="container d-flex flex-column bg-light">
                <SearchBar />
                <Switch>
                    <Route path='/search'>
                        <SearchSuggestions />
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