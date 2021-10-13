import React from "react";

const LaptopDetails = ({ laptop }) => {
    return (
        <div className="card" style={{ width: "18rem", margin: "auto" }}>
            <img className="card-img-top" src={laptop.img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{laptop.name}</h5>
                <p className="card-text">De la <b>{laptop.starting_price}</b> lei</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{laptop.manufacturer}</li>
                <li className="list-group-item">RAM: {laptop.ram_amount} GB</li>
                <li className="list-group-item">{laptop.operating_system}</li>
                <li className="list-group-item">{laptop.graphics_card_type}</li>
                <li className="list-group-item">{laptop.graphics_card_model}</li>
            </ul>
        </div>
    )
}

export default LaptopDetails