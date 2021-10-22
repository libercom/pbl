import React from "react";
import { Route } from "react-router-dom";
import LaptopDetails from "../components/details/LaptopDetails";
import MonitorDetails from "../components/details/MonitorDetails";
import MouseDetails from "../components/details/MouseDetails";

const DetailsPage = ({ devices }) => {
    return devices.map((el, i) => {
        return (
            <Route
                key={i}
                path={'/' + el.name}
                render={routeProps => (
                    <>
                        {(el.category === 'Laptops') ?
                            <LaptopDetails {...routeProps} />
                            : (el.category === 'Mouses') ?
                                <MouseDetails {...routeProps} /> :
                                <MonitorDetails {...routeProps} />}
                    </>
                )}
            />
        )
    })
}

export default DetailsPage