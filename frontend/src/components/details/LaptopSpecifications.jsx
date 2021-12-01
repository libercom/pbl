import React from "react";

const LaptopSpecifications = ({ device }) => {
    return (
        <div className="device-specifications">
            <h3>Caracteristici, descrierea produsului</h3>
            <table>
                <tbody>
                    <tr>
                        <td className="specification-name">Producător</td>
                        <td className="specification-value">{device.brand}</td>
                    </tr>
                    <tr>
                        <td className="specification-name">Producător CPU</td>
                        <td className="specification-value">{device.processor_manufacturer}</td>
                    </tr>
                    <tr>
                        <td className="specification-name">Număr de nuclee</td>
                        <td className="specification-value">{device.processor_cores_number}</td>
                    </tr>
                    {/* <tr>
                        <td className="specification-name">Frecvența procesorului</td>
                        <td className="specification-value">{device.processor_frequence} GHz</td>
                    </tr> */}
                    <tr>
                        <td className="specification-name">RAM</td>
                        <td className="specification-value">{device.ram_amount} GB</td>
                    </tr>
                    <tr>
                        <td className="specification-name">Capacitate memorie</td>
                        <td className="specification-value">{device.storage_capacity}</td>
                    </tr>
                    {/* <tr>
                        <td className="specification-name">Sistem de operare</td>
                        <td className="specification-value">{device.operating_system}</td>
                    </tr> */}
                    {/* <tr>
                        <td className="specification-name">Tip procesor video</td>
                        <td className="specification-value">{device.graphics_card_type}</td>
                    </tr> */}
                    <tr>
                        <td className="specification-name">Model procesor video</td>
                        <td className="specification-value">{device.graphics_card_model}</td>
                    </tr>
                    {/* <tr>
                        <td className="specification-name">Rezoluție ecran</td>
                        <td className="specification-value">{device.display_resolution}</td>
                    </tr> */}
                    <tr>
                        <td className="specification-name">Dimensiune ecran</td>
                        <td className="specification-value">{device.display_diagonal_size}''</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LaptopSpecifications