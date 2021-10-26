import React from "react";

const MouseSpecifications = ({ device }) => {
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
                        <td className="specification-name">Tip conexiune</td>
                        <td className="specification-value">{device.connection_type}</td>
                    </tr>
                    <tr>
                        <td className="specification-name">Rezoluție maximă</td>
                        <td className="specification-value">{device.max_resolution}</td>
                    </tr>
                    <tr>
                        <td className="specification-name">Tip senzor</td>
                        <td className="specification-value">{device.sensor_type}</td>
                    </tr>
                    <tr>
                        <td className="specification-name">Număr de butoane</td>
                        <td className="specification-value">{device.buttons_number}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MouseSpecifications