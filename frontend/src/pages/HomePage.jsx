import React from "react";
import NavBar from "../components/home/NavBar";
import PopularProducts from "../components/home/PopularProducts";
import Sponsors from "../components/home/Sponsors";
import { useGetPopularDevicesQuery } from "../store/queries/products";
import '../styles/home.scss'

const HomePage = () => {
    const { data: popularDevices, error, isLoading: loading } = useGetPopularDevicesQuery()

    if (loading) return <NavBar />

    return (
        <>
            <NavBar />
            <PopularProducts popularDevices={popularDevices} />
            <Sponsors />
        </>
    )
}

export default HomePage