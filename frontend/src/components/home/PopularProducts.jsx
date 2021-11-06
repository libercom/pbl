import React, { useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPopularDevices } from "../../redux/actions/actions";

const PopularProducts = ({ popularDevices, loading, getPopularDevices }) => {
    useLayoutEffect(() => {
        getPopularDevices()
    }, [])

    return (
        <>
            {loading ? <div className="section_popular-products"></div> :
                <div className="section_popular-products">
                    <h2>
                        Produse populare
                    </h2>
                    <hr />
                    <div className="item-list">
                        {popularDevices.map((device, i) => {
                            return (
                                <Link
                                    to={'/' + device.category.toLowerCase() + '/' + device.name.toLowerCase().replaceAll('-', '_').replaceAll(' ', '-')}
                                    key={i}
                                    className="item"
                                >
                                    <img src={device.img} alt="" />
                                    <h4>De la {device.starting_price},00 lei</h4>
                                    <p>{device.name}</p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        popularDevices: state.popular.popular,
        loading: state.loading.loading
    }
}

const mapDispatchToProps = {
    getPopularDevices,
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularProducts)