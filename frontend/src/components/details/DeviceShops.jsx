import React from "react";
import '../../styles/shop.scss'

const DeviceShops = ({ device }) => {
    return (
        <div className="device-prices">
            <div className="shop">
                <div className="shop-img">
                    <img src="/media/uploads/darwin.png" alt="" width='110px' height='35px' />
                </div>
                <div className="shop-ginfo">
                    <div className="shop-price">
                        {device.darwin_price} lei
                    </div>
                    {device.darwin_is_available ?
                        <div className="shop-available">
                            In stoc
                        </div> :
                        <div className="shop-available">
                            Stoc epuizat
                        </div>
                    }
                </div>
                <div className="shop-link">
                    <a className="shop-link-button" href={device.darwin_link}>spre magazin &gt;</a>
                </div>
            </div>
            <div className="shop">
                <div className="shop-img">
                    <img src="/media/uploads/enter.png" alt="" width='110px' height='32px' />
                </div>
                <div className="shop-ginfo">
                    <div className="shop-price">
                        {device.enter_price} lei
                    </div>
                    {device.enter_is_available ?
                        <div className="shop-available">
                            In stoc
                        </div> :
                        <div className="shop-available">
                            Stoc epuizat
                        </div>
                    }
                </div>
                <div className="shop-link">
                    <a className="shop-link-button" href={device.enter_link}>spre magazin &gt;</a>
                </div>
            </div>
            <div className="shop">
                <div className="shop-img">
                    <img src="/media/uploads/maximum3.png" alt="" width='110px' height='35px' />
                </div>
                <div className="shop-ginfo">
                    <div className="shop-price">
                        {device.enter_price + 10} lei
                    </div>
                    {device.enter_is_available ?
                        <div className="shop-available">
                            In stoc
                        </div> :
                        <div className="shop-available">
                            Stoc epuizat
                        </div>
                    }
                </div>
                <div className="shop-link">
                    <a className="shop-link-button" href={device.enter_link}>spre magazin &gt;</a>
                </div>
            </div>
            <div className="shop">
                <div className="shop-img">
                    <img src="/media/uploads/pandashop2.png" alt="" width='110px' height='35px' />
                </div>
                <div className="shop-ginfo">
                    <div className="shop-price">
                        {device.enter_price + 50} lei
                    </div>
                    {device.enter_is_available ?
                        <div className="shop-available">
                            In stoc
                        </div> :
                        <div className="shop-available">
                            Stoc epuizat
                        </div>
                    }
                </div>
                <div className="shop-link">
                    <a className="shop-link-button" href={device.enter_link}>spre magazin &gt;</a>
                </div>
            </div>
            <div className="shop">
                <div className="shop-img">
                    <img src="/media/uploads/bomba.png" alt="" width='110px' height='35px' />
                </div>
                <div className="shop-ginfo">
                    <div className="shop-price">
                        {device.enter_price + 30} lei
                    </div>
                    {device.enter_is_available ?
                        <div className="shop-available">
                            In stoc
                        </div> :
                        <div className="shop-available">
                            Stoc epuizat
                        </div>
                    }
                </div>
                <div className="shop-link">
                    <a className="shop-link-button" href={device.enter_link}>spre magazin &gt;</a>
                </div>
            </div>
        </div>
    )
}

export default DeviceShops