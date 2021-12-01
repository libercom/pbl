import React from "react";
import { useParams } from "react-router-dom";
import DeviceImages from "../components/details/DeviceImages";
import DeviceInfo from "../components/details/DeviceInfo";
import DeviceShops from "../components/details/DeviceShops";
import LaptopSpecifications from "../components/details/LaptopSpecifications";
import MonitorSpecifications from "../components/details/MonitorSpecifications";
import MouseSpecifications from "../components/details/MouseSpecifications";
import { useGetDetailsQuery } from "../store/queries/products";
import '../styles/details.scss'

const DetailsPage = () => {
    const { name } = useParams()

    const { data: device, error, isLoading: loading } = useGetDetailsQuery(name)

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
                    <DeviceShops device={device} />
                </div>
            }
        </>
    )
}

export default DetailsPage