import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import DeviceImages from "../components/details/DeviceImages";
import DeviceInfo from "../components/details/DeviceInfo";
import DeviceShops from "../components/details/DeviceShops";
import LaptopSpecifications from "../components/details/LaptopSpecifications";
import MonitorSpecifications from "../components/details/MonitorSpecifications";
import MouseSpecifications from "../components/details/MouseSpecifications";
import { getDetails } from "../redux/actions/actions";

const DetailsPage = ({ device, loading, getDetails }) => {
    const { name } = useParams()

    useLayoutEffect(() => {
        getDetails(name)
    }, [])

    return (
        <>
            {loading ? <div className="section"></div> :
                <div className="section">
                    <DeviceImages device={device} />
                    <div className="device-info">
                        <DeviceInfo device={device} />
                        {device.category === 'Laptops' ? <LaptopSpecifications device={device} /> :
                            device.category === 'Monitors' ? <MonitorSpecifications device={device} /> :
                                <MouseSpecifications device={device} />
                        }
                    </div>
                    <DeviceShops />
                </div>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        device: state.details.details,
        loading: state.loading.loading
    }
}

const mapDispatchToProps = {
    getDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage)