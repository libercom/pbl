import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchSuggestions = ({ search, setSearch }) => {

    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        let isSubscribed = true;
        if (search.length > 0) {
            axios.get(`api/devices/search/${search.replaceAll(' ', '+')}`)
                .then(result => {
                    if (isSubscribed) {
                        setSuggestions(result.data.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
                    }
                })
                .catch(error => console.log(error))
        } else {
            setSuggestions([])
        }

        return () => isSubscribed = false
    }, [search])

    return (
        <div className="container d-flex flex-column">
            {suggestions.length > 0 ?
                suggestions.map((el, i) => {
                    return (
                        <div key={i} className="card d-flex" style={{ width: '500px', margin: "auto auto" }}>
                            <img className="card-img-top" style={{ width: '180px', height: '180px' }} src={el.img} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{el.name}</h5>
                                <p className="card-text">De la <b>{el.starting_price}</b> lei</p>
                                <Link to={'/' + el.name.replaceAll(' ', '+')} className="btn btn-primary" onClick={() => setSearch('')}>Details</Link>
                            </div>
                        </div>
                    )
                })
                : <h3 style={{ textAlign: "center" }}>Found nothing</h3>
            }
        </div>
    )
}

export default SearchSuggestions