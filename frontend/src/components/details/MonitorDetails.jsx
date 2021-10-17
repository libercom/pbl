import React from "react";

const MonitorDetails = ({ monitor }) => {
    return (
        <div class="section">
            <div class="device-photos">
                <div class="main-image">
                    <img src={monitor.img} alt="" />
                </div>
                <p><b>Galerie</b> {monitor.name}</p>
                <div class="secondary-images">
                    <img class="current-img" src={monitor.img} alt="" />
                    <img src={monitor.img} alt="" />
                    <img src={monitor.img} alt="" />
                </div>
            </div>
            <div class="device-info">
                <div class="device-general-info">
                    <h1>{monitor.name}</h1>
                    <span class="material-icons checked">
                        circle
                    </span>
                    <span class="material-icons checked">
                        circle
                    </span>
                    <span class="material-icons checked">
                        circle
                    </span>
                    <span class="material-icons checked">
                        circle
                    </span>
                    <span class="material-icons">
                        circle
                    </span>
                    <p>De la <b>{monitor.starting_price}</b> lei</p>
                </div>
                <div class="device-specifications">
                    <h3>Caracteristici, descrierea produsului</h3>
                    <table>
                        <tr>
                            <td class="specification-name">Producător</td>
                            <td class="specification-value">{monitor.manufacturer}</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Tip ecran</td>
                            <td class="specification-value">{monitor.display_type}</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Rezoluție ecran</td>
                            <td class="specification-value">{monitor.resolution}</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Timp de răspuns</td>
                            <td class="specification-value">{monitor.response_time} ms</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Ecran curbat</td>
                            <td class="specification-value">{monitor.curved_screen}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="device-prices">

            </div>
        </div>
    )
}

export default MonitorDetails