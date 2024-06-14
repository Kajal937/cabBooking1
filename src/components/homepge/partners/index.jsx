import React from "react";
import "./style.css";


const Partners = () => {

    const partners = [
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/partners/partners1.png",
        },
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/partners/partners2.png",
        },
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/partners/partners3.png",
        },
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/partners/partners4.png",
        },
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/partners/partners5.png",
        },
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/partners/partners6.png",
        },
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/partners/partners7.png",
        },
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/partners/partners8.png",
        },
    ]
    return <>
        <div className="outer-partners">
            <div className="partners-container">
                <div className="left-partners">
                    <h5>_____Our Partners</h5>
                    <h3>We work with the best brand partner’s</h3>
                </div>

                <div className="right-partners">
                    {partners.map((v, index) => (
                        <div className="card-img">
                            <img src={v.img}></img>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    </>
}



export default Partners;