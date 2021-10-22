import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../components/home/NavBar";
import PopularProducts from "../components/home/PopularProducts";
import Sponsors from "../components/home/Sponsors";

const HomePage = () => {
    return (
        <Route
            path='/'
            render={routeProps => (
                <>
                    <NavBar {...routeProps} />
                    <PopularProducts {...routeProps} />
                    <Sponsors {...routeProps} />
                </>
            )}
        />
    )
}

export default HomePage