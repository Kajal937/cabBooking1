import React from "react";
import "./style.css";


const Driver = () => {
    return <>
        <div className="outer-diriver-card">
            <h5 className="heading-0">_____Join As Driver</h5>
            <h3 className="heading-00">Get Set go for the career of a lifetime!</h3>

            <div className="driver-container">
                <div className="left-driver">
                    <img src="https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/career/career.png"></img>
                </div>



                <div className="right-driver">
                    <h4>Benefits of join us</h4>
                    <p>Consectetur adipiscing elit, sed do eiusmod tepor incididunt ut labore et dolore magna andes aliquises ipsum suspen asdashb disse ultrices gravidasus part of new menory car driver new ut labore et dolore magna andes aliquises ipsum suspen.</p>
                    {/* 1 */}

                    <div className="driver-card">
                        <div className="driver-first">
                            <h6>Leave Benefits</h6>
                            <p>Consectetur adipiscing elit, sed do eiusmod tepor incididunt ut labore esdssd.</p>
                        </div>

                        {/* 2 */}
                        <div className="driver-first">
                            <h6>Leave Benefits</h6>
                            <p>Consectetur adipiscing elit, sed do eiusmod tepor incididunt ut labore esdssd.</p>
                        </div>

                        {/* 3 */}
                        <div className="driver-first">
                            <h6>Leave Benefits</h6>
                            <p>Consectetur adipiscing elit, sed do eiusmod tepor incididunt ut labore esdssd.</p>
                        </div>
                        {/* 4 */}
                        <div className="driver-first">
                            <h6>Leave Benefits</h6>
                            <p>Consectetur adipiscing elit, sed do eiusmod tepor incididunt ut labore esdssd.</p>
                        </div>


                    </div>
                    <div className="driver-btn">
                        <button>Join Our Community</button>
                    </div>
                </div>

            </div>
        </div>

    </>
}


export default Driver;