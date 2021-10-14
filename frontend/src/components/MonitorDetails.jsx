import React from "react";

const MonitorDetails = ({ monitor }) => {
    return (
        <div className="card" style={{ width: "18rem", margin: "auto" }}>
            <img className="card-img-top" src={monitor.img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{monitor.name}</h5>
                <p className="card-text">De la <b>{monitor.starting_price}</b> lei</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Manufacturer:</b> {monitor.manufacturer}</li>
                <li className="list-group-item"><b>Display type:</b> {monitor.display_type}</li>
                <li className="list-group-item"><b>Resolution:</b> {monitor.resolution}</li>
                <li className="list-group-item"><b>Response time:</b> {monitor.response_time}</li>
                <li className="list-group-item"><b>Curved screen:</b> {monitor.curved_screen}</li>
            </ul>
        </div>
    )
}

export default MonitorDetails