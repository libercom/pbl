import React from "react";
import { Link } from "react-router-dom";

const PopularProducts = ({ popularDevices }) => {
    return (
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
    )
}

// const mapStateToProps = state => {
//     return {
//         popularDevices: state.popular.popular,
//         loading: state.loading.loading
//     }
// }

// const mapDispatchToProps = {
//     getPopularDevices,
// }

export default PopularProducts