import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom";
import {
    changeSearch,
    searchDevices,
    clearSuggestions
} from "../redux/actions/actions";

const SearchSuggestions = ({ search, suggestions }) => {
    const dispatch = useDispatch()
    const [timer, setTimer] = useState(null)

    useEffect(() => {
        let isSubscribed = true;

        if (timer) {
            clearInterval(timer)
        }

        setTimer(
            setTimeout(() => {
                if (search.length > 0) {
                    dispatch(searchDevices(search))
                } else {
                    dispatch(clearSuggestions())
                }
            }, 500)
        )

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
                                <Link to={'/' + el.name.replaceAll(' ', '+')} className="btn btn-primary" onClick={() => dispatch(changeSearch(''))}>Details</Link>
                            </div>
                        </div>
                    )
                })
                : <h3 style={{ textAlign: "center" }}>Found nothing</h3>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        search: state.search.search,
        suggestions: state.search.suggestions
    }
}

export default connect(mapStateToProps, null)(SearchSuggestions)