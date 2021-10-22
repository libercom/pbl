import React from "react";

const MonitorDetails = ({ monitor }) => {
    return (
        <div className="section">
            <div className="device-photos">
                <div className="main-image">
                    <img src={monitor.img} alt="" />
                </div>
                <p><b>Galerie</b> {monitor.name}</p>
                <div className="secondary-images">
                    <img className="current-img" src={monitor.img} alt="" />
                    <img src={monitor.img} alt="" />
                    <img src={monitor.img} alt="" />
                </div>
            </div>
            <div className="device-info">
                <div className="device-general-info">
                    <h1>{monitor.name}</h1>
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
                    <p>De la <b>{monitor.starting_price}</b> lei</p>
                </div>
                <div className="device-specifications">
                    <h3>Caracteristici, descrierea produsului</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td className="specification-name">Producător</td>
                                <td className="specification-value">{monitor.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className="specification-name">Tip ecran</td>
                                <td className="specification-value">{monitor.display_type}</td>
                            </tr>
                            <tr>
                                <td className="specification-name">Rezoluție ecran</td>
                                <td className="specification-value">{monitor.resolution}</td>
                            </tr>
                            <tr>
                                <td className="specification-name">Timp de răspuns</td>
                                <td className="specification-value">{monitor.response_time} ms</td>
                            </tr>
                            <tr>
                                <td className="specification-name">Ecran curbat</td>
                                <td className="specification-value">{monitor.curved_screen}</td>
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

export default MonitorDetails