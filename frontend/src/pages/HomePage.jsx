import React from "react";
import NavBar from "../components/home/NavBar";
import PopularProducts from "../components/home/PopularProducts";
import Sponsors from "../components/home/Sponsors";

const HomePage = () => {
    return (
        <>
            <NavBar />
            <PopularProducts />
            <Sponsors />
        </>
    )
}

export default HomePage