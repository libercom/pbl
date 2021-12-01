import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import WishListProduct from "../components/wishlist/WishListProduct"
import "../styles/wishlist.scss"

const WishlistPage = () => {
    const wishList = useSelector((state) => state.wishList.wishList)
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const history = useHistory()

    if (!isAuthenticated) {
        history.push('/')
    }

    return (
        <div className="wishlist-section">
            <div className="wishlist-items">
                {wishList.map(item => {
                    return (
                        <WishListProduct key={item.id} item={item} />
                    )
                })}
            </div>

        </div>
    )
}

export default WishlistPage
