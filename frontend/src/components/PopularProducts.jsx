import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PopularProducts = ({ devices }) => {
    return (
        <div className="container d-flex flex-column" style={{ marginTop: "20px" }}>
            <h3 style={{ textAlign: "center" }}>Produse populare</h3>
            <div className="container d-flex justify-content-center">
                {devices.slice(0, 5).map((el, i) => {
                    return (
                        <div key={i} className="card" style={{ width: '200px', marginRight: '10px' }}>
                            <img className="card-img-top" style={{ width: '180px', height: '180px' }} src={el.img} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{el.name}</h5>
                                <p className="card-text">De la <b>{el.starting_price}</b> lei</p>
                                <Link
                                    to={'/' + el.name.replaceAll(' ', '+')}
                                    className="btn btn-primary"
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        devices: state.devices.devices
    }
}

export default connect(mapStateToProps, null)(PopularProducts)