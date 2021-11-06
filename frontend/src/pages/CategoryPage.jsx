import React, { useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import {
    Switch,
    Route,
    useRouteMatch,
    useParams
} from "react-router-dom";
import DeviceCategory from "../components/categories/DeviceCategory";
import { getDevices } from "../redux/actions/actions";
import DetailsPage from "./DetailsPage";

const CategoryPage = ({ getDevices }) => {
    const { path } = useRouteMatch()
    const { category } = useParams()

    useLayoutEffect(() => {
        getDevices(category)
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
    getDevices
}

export default connect(null, mapDispatchToProps)(CategoryPage)