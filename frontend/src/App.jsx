import React, { useState, useEffect } from "react";
import axios from 'axios';
import PopularProducts from "./components/PopularProducts.jsx";
import Sponsors from "./components/Sponsors.jsx";
import SearchBar from "./components/SearchBar.jsx";
import LaptopDetails from "./components/LaptopDetails.jsx";
import SearchSuggestions from "./components/SearchSuggestions.jsx";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => {

    const [laptops, setLaptops] = useState([])
    const [search, setSearch] = useState('')

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
                <SearchBar search={search} setSearch={setSearch} />
                <Switch>
                    <Route path='/search'>
                        <SearchSuggestions search={search} setSearch={setSearch} />
                    </Route>
                    {laptops.map(el => {
                        return (
                            <Route key={el.id} path={'/' + el.name.replaceAll(' ', '+')}>
                                <LaptopDetails laptop={el} />
                            </Route>
                        )
                    })}
                    <Route path='/'>
                        <PopularProducts laptops={laptops.slice(0, 5)} />
                        <Sponsors />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App