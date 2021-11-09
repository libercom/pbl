import React from "react";
import {
    Switch,
    Route,
    useRouteMatch,
    useParams
} from "react-router-dom";
import DeviceCategory from "../components/categories/DeviceCategory";
import DetailsPage from "./DetailsPage";
import '../styles/category.scss'

const CategoryPage = () => {
    const { path } = useRouteMatch()
    const { category } = useParams()

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

export default CategoryPage