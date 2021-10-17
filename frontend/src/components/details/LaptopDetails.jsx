import React from "react";

const LaptopDetails = ({ laptop }) => {
    return (
        <div class="section">
            <div class="device-photos">
                <div class="main-image">
                    <img src={laptop.img} alt="" />
                </div>
                <p><b>Galerie</b> {laptop.name}</p>
                <div class="secondary-images">
                    <img class="current-img" src={laptop.img} alt="" />
                    <img src={laptop.img} alt="" />
                    <img src={laptop.img} alt="" />
                </div>
            </div>
            <div class="device-info">
                <div class="device-general-info">
                    <h1>{laptop.name}</h1>
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
                    <p>De la <b>{laptop.starting_price}</b> lei</p>
                </div>
                <div class="device-specifications">
                    <h3>Caracteristici, descrierea produsului</h3>
                    <table>
                        <tr>
                            <td class="specification-name">Producător</td>
                            <td class="specification-value">{laptop.manufacturer}</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Producător CPU</td>
                            <td class="specification-value">{laptop.processor_manufacturer}</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Număr de nuclee</td>
                            <td class="specification-value">{laptop.processor_cores_number}</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Frecvența procesorului</td>
                            <td class="specification-value">{laptop.processor_frequence} GHz</td>
                        </tr>
                        <tr>
                            <td class="specification-name">RAM</td>
                            <td class="specification-value">{laptop.ram_amount}</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Capacitate memorie</td>
                            <td class="specification-value">{laptop.storage_capacity}</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Sistem de operare</td>
                            <td class="specification-value">{laptop.operating_system}</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Tip procesor video</td>
                            <td class="specification-value">{laptop.graphics_card_type}</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Model procesor video</td>
                            <td class="specification-value">{laptop.graphics_card_model}</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Rezoluție ecran</td>
                            <td class="specification-value">{laptop.display_resolution}</td>
                        </tr>
                        <tr>
                            <td class="specification-name">Dimensiune ecran</td>
                            <td class="specification-value">{laptop.display_diagonal_size}''</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="device-prices">

            </div>
        </div>
    )
}

export default LaptopDetails