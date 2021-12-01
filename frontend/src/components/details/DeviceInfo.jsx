import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishList, removeItemFromWishList } from "../../store/reducers/wishListSlice";

const DeviceInfo = ({ device }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const wishList = useSelector((state) => state.wishList.wishList)
    const dispatch = useDispatch()

    const addItemToWishListHandler = () => {
        dispatch(addItemToWishList(device))
    }

    const removeItemFromWishListHandler = () => {
        dispatch(removeItemFromWishList(device.id))
    }

    return (
        <div className="device-general-info">
            <h1>{device.name}</h1>
            <span className="material-icons checked">
                circle
            </span>
            <span className="material-icons checked">
                circle
            </span>
            <span className="material-icons checked">
                circle
            </span>
            <span className="material-icons checked">
                circle
            </span>
            <span className="material-icons">
                circle
            </span>
            <p>de la <b>{device.starting_price}</b> lei</p>
            {wishList.indexOf(device) === -1 ? (
                <button
                    className="to-wishlist-button"
                    style={{ display: isAuthenticated ? 'block' : 'none' }}
                    onClick={addItemToWishListHandler}
                >
                    Adaugă în coș
                </button>
            ) : (
                <button
                    className="from-wishlist-button"
                    style={{ display: isAuthenticated ? 'block' : 'none' }}
                    onClick={removeItemFromWishListHandler}
                >
                    Șterge din coș
                </button>
            )}

        </div>
    )
}

export default DeviceInfo