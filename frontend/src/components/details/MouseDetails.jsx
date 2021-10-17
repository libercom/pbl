import React from "react";

const MouseDetails = ({ mouse }) => {
    return (
        <div class="section">
            <div class="device-photos">
                <div class="main-image">
                    <img src={mouse.img} alt="" />
                </div>
                <p><b>Galerie</b> {mouse.name}</p>
                <div class="secondary-images">
                    <img class="current-img" src={mouse.img} alt="" />
                    <img src={mouse.img} alt="" />
                    <img src={mouse.img} alt="" />
                </div>
            </div>
            <div class="device-info">
                <div class="device-general-info">
                    <h1>{mouse.name}</h1>
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
                    <p>De la <b>{mouse.starting_price}</b> lei</p>
                </div>
                <div class="device-specifications">
                    <h3>Caracteristici, descrierea produsului</h3>
                    <table>
                        <tr>
                            <td class="specification-name">Producător</td>
                            <td class="specification-value">{mouse.manufacturer}</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Tip conexiune</td>
                            <td class="specification-value">{mouse.connection_type}</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Rezoluție maxinmă</td>
                            <td class="specification-value">{mouse.max_resolution}</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Tip senzor</td>
                            <td class="specification-value">{mouse.sensor_type}</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Număr de butoane</td>
                            <td class="specification-value">{mouse.buttons_number}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="device-prices">

            </div>
        </div>
    )
}

export default MouseDetails