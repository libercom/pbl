import React from "react";

const MouseDetails = ({ mouse }) => {
    return (
        <div className="section">
            <div className="device-photos">
                <div className="main-image">
                    <img src={mouse.img} alt="" />
                </div>
                <p><b>Galerie</b> {mouse.name}</p>
                <div className="secondary-images">
                    <img className="current-img" src={mouse.img} alt="" />
                    <img src={mouse.img} alt="" />
                    <img src={mouse.img} alt="" />
                </div>
            </div>
            <div className="device-info">
                <div className="device-general-info">
                    <h1>{mouse.name}</h1>
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
                    <p>De la <b>{mouse.starting_price}</b> lei</p>
                </div>
                <div className="device-specifications">
                    <h3>Caracteristici, descrierea produsului</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td className="specification-name">Producător</td>
                                <td className="specification-value">{mouse.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="specification-name">Tip conexiune</td>
                                <td className="specification-value">{mouse.connection_type}</td>
                            </tr>
                            <tr>
                                <td className="specification-name">Rezoluție maximă</td>
                                <td className="specification-value">{mouse.max_resolution}</td>
                            </tr>
                            <tr>
                                <td className="specification-name">Tip senzor</td>
                                <td className="specification-value">{mouse.sensor_type}</td>
                            </tr>
                            <tr>
                                <td className="specification-name">Număr de butoane</td>
                                <td className="specification-value">{mouse.buttons_number}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="device-prices">

            </div>
        </div>
    )
}

export default MouseDetails