import React from "react"
import { Link } from 'react-router-dom'

const WishListProduct = ({ item }) => {
    return (
        <Link
            className="wishlist-item"
            to={'/' + item.category.toLowerCase() + '/' + item.name.toLowerCase().replaceAll('-', '_').replaceAll(' ', '-')}
        >
            <img src={item.img} alt="" className="wishlist-item-img" />
            <div className="wishlist-item-ginfo">
                <h2 className="wishlist-item-name">{item.name}</h2>
                <p className="wishlist-item-price">de la <b>{item.starting_price}</b> lei</p>
            </div>
        </Link>
    )
}

export default WishListProduct
