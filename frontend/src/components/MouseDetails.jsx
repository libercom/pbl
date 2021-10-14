import React from "react";

const MouseDetails = ({ mouse }) => {
    return (
        <div className="card" style={{ width: "18rem", margin: "auto" }}>
            <img className="card-img-top" src={mouse.img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{mouse.name}</h5>
                <p className="card-text">De la <b>{mouse.starting_price}</b> lei</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Manufacturer:</b> {mouse.manufacturer}</li>
                <li className="list-group-item"><b>Connection type:</b> {mouse.connection_type}</li>
                <li className="list-group-item"><b>Max resolution:</b> {mouse.max_resolution}</li>
                <li className="list-group-item"><b>Sensor type:</b> {mouse.sensor_type}</li>
                <li className="list-group-item"><b>Number of buttons:</b> {mouse.buttons_number}</li>
            </ul>
        </div>
    )
}

export default MouseDetails