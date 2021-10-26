import React from "react";

const DeviceInfo = ({ device }) => {
    return (
        <div className="device-general-info">
            <h1>{device.name}</h1>
            <span className="material-icons checked">
                circle
            </span>
            <span className="material-icons checked">
                circle
            </span>
            <span className="material-icons checked">
                circle
            </span>
            <span className="material-icons checked">
                circle
            </span>
            <span className="material-icons">
                circle
            </span>
            <p>De la <b>{device.starting_price}</b> lei</p>
        </div>
    )
}

export default DeviceInfo