import React, { useState, useEffect } from "react";
import axios from 'axios';
import PopularProducts from "./components/PopularProducts.jsx";
import Sponsors from "./components/Sponsors.jsx";
import SearchBar from "./components/SearchBar.jsx";
import LaptopDetails from "./components/LaptopDetails.jsx";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => {

    const [laptops, setLaptops] = useState([])

    useEffect(() => {
        axios.get('/api/laptops')
            .then(result => {
                setLaptops(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <Router>
            <div className="container d-flex flex-column bg-light">
                <SearchBar />
                <Switch>
                    {laptops.map(el => {
                        return (
                            <Route key={el.id} path={'/' + el.name.replaceAll(' ', '+')}>
                                <LaptopDetails laptop={el} />
                            </Route>
                        )
                    })}
                    <Route path='/'>
                        <PopularProducts laptops={laptops} />
                        <Sponsors />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App