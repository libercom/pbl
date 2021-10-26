import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../home/NavBar";

const DeviceCategory = ({ category, devices, loading }) => {
    return (
        <>
            <NavBar />
            {loading ? <div className="section_devices"></div> :
                <div className="section_devices">
                    <h2>
                        {category === 'laptops' ? 'Laptopuri' :
                            category === 'mouses' ? 'Mouse-uri' :
                                'Monitoare'}
                    </h2>
                    <hr />
                    <div className="devices-list">
                        {
                            devices.map(device => {
                                return (
                                    <Link
                                        key={device.id}
                                        className="device"
                                        to={`/${category}/${device.name.toLowerCase().replaceAll('-', '_').replaceAll(' ', '-')}`}
                                    >
                                        <img src={device.img} alt="" />
                                        <h4>De la {device.starting_price},00 lei</h4>
                                        <p>{device.name}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        devices: state.devices.devices,
        loading: state.loading.loading
    }
}

export default connect(mapStateToProps, null)(DeviceCategory)