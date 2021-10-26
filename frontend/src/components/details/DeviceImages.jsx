import React from "react";

const DeviceImages = ({ device }) => {
    return (
        <div className="device-photos">
            <div className="main-image">
                <img src={device.img} alt="" />
            </div>
            <p><b>Galerie</b> {device.name}</p>
            <div className="secondary-images">
                <img className="current-img" src={device.img} alt="" />
                <img src={device.img} alt="" />
                <img src={device.img} alt="" />
            </div>
        </div>
    )
}

export default DeviceImages