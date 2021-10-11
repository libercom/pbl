import React, { useState, useEffect } from "react";
import axios from 'axios';
import PopularProducts from "./components/PopularProducts.jsx";
import Sponsors from "./components/Sponsors.jsx";
import SearchBar from "./components/SearchBar.jsx";

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
        <div className="container d-flex flex-column bg-light">
            <SearchBar />
            <PopularProducts laptops={laptops} />
            <Sponsors />
        </div>
    )
}

export default App