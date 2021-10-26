import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    Switch,
    Route,
    useRouteMatch,
    useParams
} from "react-router-dom";
import DeviceCategory from "../components/categories/DeviceCategory";
import { clearDevices, getDevices } from "../redux/actions/actions";
import DetailsPage from "./DetailsPage";

const CategoryPage = ({ getDevices, clearDevices }) => {
    const { path } = useRouteMatch()
    const { category } = useParams()

    useEffect(() => {
        getDevices(category)

        return () => clearDevices()
    }, [category])

    return (
        <>
            <Switch>
                <Route path={`${path}/:name`}>
                    <DetailsPage />
                </Route>
                <Route path={path}>
                    <DeviceCategory category={category} />
                </Route>
            </Switch>
        </>
    )
}

const mapDispatchToProps = {
    getDevices,
    clearDevices
}

export default connect(null, mapDispatchToProps)(CategoryPage)