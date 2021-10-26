import React from "react";

const MonitorSpecifications = ({ device }) => {
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
                        <td className="specification-name">Tip ecran</td>
                        <td className="specification-value">{device.display_type}</td>
                    </tr>
                    <tr>
                        <td className="specification-name">Rezoluție ecran</td>
                        <td className="specification-value">{device.resolution}</td>
                    </tr>
                    <tr>
                        <td className="specification-name">Timp de răspuns</td>
                        <td className="specification-value">{device.response_time} ms</td>
                    </tr>
                    <tr>
                        <td className="specification-name">Ecran curbat</td>
                        <td className="specification-value">{device.curved_screen}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MonitorSpecifications