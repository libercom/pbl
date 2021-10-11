import React from "react";
import { Link } from "react-router-dom";

const PopularProducts = ({ laptops }) => {
    return (

        <div className="container d-flex flex-column" style={{ marginTop: "20px" }}>
            <h3 style={{ textAlign: "center" }}>Produse populare</h3>
            <div className="container d-flex justify-content-center">
                {laptops.map(el => {
                    return (
                        <div key={el.id} className="card" style={{ width: '200px', marginRight: '10px' }}>
                            <img className="card-img-top" style={{ width: '180px', height: '180px' }} src={el.img} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{el.name}</h5>
                                <p className="card-text">De la <b>{el.starting_price}</b> lei</p>
                                <Link to={'/' + el.name.replaceAll(' ', '+')} className="btn btn-primary">Details</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PopularProducts