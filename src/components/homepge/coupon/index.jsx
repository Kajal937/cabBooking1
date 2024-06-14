import React from "react";
import "./style.css";

const Coupon = () => {

    const coupon = [
        {
            h3: "35%"
        },
        {
            h3: "25%"
        },
        {
            h3: "55%"
        },
        {
            h3: "40%"
        },
    ]
    return <>
        <div className="coupon-outer-card">
            <h5>_____Coupon</h5>
            <h4>Todays Top Coupons &amp; Offers</h4>

            <div className="coupon-container">

                {coupon.map((v, index) => (
                    <div className="coupon-card">
                        <i class="fa-solid fa-car"></i>
                        <div className="coupon-heading">
                            <h3>{v.h3}<span className="span-color">off</span></h3>
                        </div>

                        <p className="para">Save Up to 65% Off + Extra Flat Rs 300 OFF  On All Cab Booking. Plus All Toll Free</p>

                        <div className="coupon-btn">
                            <button className="text-white">Get This Coupon</button>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    </>
}



export default Coupon;
