import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PopularProducts = ({ devices }) => {
    return (
        <div className="section_popular-products">
            <h2>
                Produse populare
            </h2>
            <hr />
            <div className="item-list">
                {devices.sort(() => (Math.random() > 0.5) ? 1 : -1).slice(0, 5).map((el, i) => {
                    return (
                        <Link to={'/' + el.name.replaceAll(' ', '+')} key={i} className="item">
                            <img src={el.img} alt="" />
                            <h4>De la {el.starting_price},00 lei</h4>
                            <p>{el.name}</p>
                        </Link>
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