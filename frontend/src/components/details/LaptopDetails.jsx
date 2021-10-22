import React, { useEffect } from "react";
import { useLocation } from 'react-router'
import { connect } from 'react-redux'
import { clearDetails, getDetails } from "../../redux/actions/actions";

const LaptopDetails = ({ laptop, getDetails, clearDetails }) => {
    const location = useLocation()

    useEffect(() => {
        getDetails(location.pathname.replace('/', ''))

        return () => clearDetails()
    }, [])

    return (
        <>
            {JSON.stringify(laptop) === JSON.stringify({}) ? <div className="section"></div> :
                <div className="section">
                    <div className="device-photos">
                        <div className="main-image">
                            <img src={laptop.img} alt="" />
                        </div>
                        <p><b>Galerie</b> {laptop.name}</p>
                        <div className="secondary-images">
                            <img className="current-img" src={laptop.img} alt="" />
                            <img src={laptop.img} alt="" />
                            <img src={laptop.img} alt="" />
                        </div>
                    </div>
                    <div className="device-info">
                        <div className="device-general-info">
                            <h1>{laptop.name}</h1>
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
                            <p>De la <b>{laptop.starting_price}</b> lei</p>
                        </div>
                        <div className="device-specifications">
                            <h3>Caracteristici, descrierea produsului</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="specification-name">Producător</td>
                                        <td className="specification-value">{laptop.brand}</td>
                                    </tr>
                                    <tr>
                                        <td className="specification-name">Producător CPU</td>
                                        <td className="specification-value">{laptop.processor_manufacturer}</td>
                                    </tr>
                                    <tr>
                                        <td className="specification-name">Număr de nuclee</td>
                                        <td className="specification-value">{laptop.processor_cores_number}</td>
                                    </tr>
                                    <tr>
                                        <td className="specification-name">Frecvența procesorului</td>
                                        <td className="specification-value">{laptop.processor_frequence} GHz</td>
                                    </tr>
                                    <tr>
                                        <td className="specification-name">RAM</td>
                                        <td className="specification-value">{laptop.ram_amount}</td>
                                    </tr>
                                    <tr>
                                        <td className="specification-name">Capacitate memorie</td>
                                        <td className="specification-value">{laptop.storage_capacity}</td>
                                    </tr>
                                    <tr>
                                        <td className="specification-name">Sistem de operare</td>
                                        <td className="specification-value">{laptop.operating_system}</td>
                                    </tr>
                                    <tr>
                                        <td className="specification-name">Tip procesor video</td>
                                        <td className="specification-value">{laptop.graphics_card_type}</td>
                                    </tr>
                                    <tr>
                                        <td className="specification-name">Model procesor video</td>
                                        <td className="specification-value">{laptop.graphics_card_model}</td>
                                    </tr>
                                    <tr>
                                        <td className="specification-name">Rezoluție ecran</td>
                                        <td className="specification-value">{laptop.display_resolution}</td>
                                    </tr>
                                    <tr>
                                        <td className="specification-name">Dimensiune ecran</td>
                                        <td className="specification-value">{laptop.display_diagonal_size}''</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="device-prices">

                    </div>
                </div>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        laptop: state.devices.details
    }
}

const mapDispatchToProps = {
    getDetails,
    clearDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(LaptopDetails)