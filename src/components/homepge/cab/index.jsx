import React from "react";
import "./style.css";

const Cab = () => {
    return (
        <>
            <div className="outer-cab-container">
                <div className="cab-container">
                    <div className="left-cab">
                        <h5>Get ₹200 cashback on App download</h5>
                        <h3>Book Cab from the App</h3>
                        <p>Download the app for exclusive deals and ease of booking</p>
                        <button className="cab-btn bg-[#ffc42b] text-white">Download App</button>
                    </div>

                    <div className="right-cab">
                        <img src="https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/download/download.png" alt="App Download" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cab;
