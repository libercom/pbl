import React, { useState, useEffect } from "react";
import axios from 'axios';
import PopularProducts from "./components/PopularProducts.jsx";
import Sponsors from "./components/Sponsors.jsx";
import SearchBar from "./components/SearchBar.jsx";
import LaptopDetails from "./components/LaptopDetails.jsx";
import SearchSuggestions from "./components/SearchSuggestions.jsx";
import MouseDetails from "./components/MouseDetails.jsx";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MonitorDetails from "./components/MonitorDetails.jsx";

const App = () => {

    const [devices, setDevices] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('/api/devices')
            .then(result => {
                setDevices(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <Router>
            <div className="container d-flex flex-column bg-light">
                <SearchBar search={search} setSearch={setSearch} />
                <Switch>
                    <Route path='/search'>
                        <SearchSuggestions search={search} setSearch={setSearch} />
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
                        <PopularProducts devices={devices.slice(0, 5)} />
                        <Sponsors />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App