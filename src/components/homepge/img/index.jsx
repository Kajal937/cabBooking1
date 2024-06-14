import React from "react";
import "./style.css";



const Img = () => {
    return <>
        <div className="background-container">
            <div className="inner-background">
                <h2 class="">The best way to get wherever you’re going</h2>
                <h1 class="mt-md-3">+81 254781-134445</h1>
                <button className="img-btn">BOOKING NOW</button>
            </div>
        </div>

        {/* second-part */}

        <div className="outer-p">
        <div className="price-container">

            <div className="left-price">
                <img src="https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/cab-booking/cab-booking.png"></img>
            </div>

            <div className="right-price">

                <label className="price-1" htmlFor="date-time">Select Date and Time</label>
                <br></br>
                <div className="first-price flex flex-wrap">
                    <input className="imgg" type="date" name="date-time" value="2024-06-10"></input>

                    {/* <input type="text" id="username" name="username"></input> */}

                    <input className="imgg" type="text" id="username" name="username"></input>
                    {/* <select className="price-select" name="seltimeformat1" id="seltimeformat1">
                        <option value="AM" selected="selected">AM</option>
                        <option value="PM">PM</option>
                    </select> */}
                </div>


                {/* 2 */}
                <div className="second-price flex flex-wrap">

                    <div className="price-2">
                        <label className="price-1" htmlFor="date-time">Pick Up</label>
                        <input className="imgg" type="text" id="username" name="username" placeholder="Start typing address"></input>
                    </div>

                    <div className="price-2">
                        <label className="price-1" htmlFor="date-time">Adult Seats</label>
                        <input className="imgg" type="number" id="username" name="username"></input>
                    </div>

                    {/* <div className="price-2">
                        <label className="price-1" htmlFor="date-time">Suitcases</label>
                        <input type="number" id="username" name="username"></input>
                    </div> */}
                </div>
                <div className="price-3">
                    <label className="price-1" htmlFor="date-time">Drop Off</label>
                    <input className="imgg" type="text" id="username" name="username" placeholder="Start typing address"></input>
                </div>
                <div className="price-2">
                    <button className="btnnnn-0 text-white">See Price</button>
                </div>
            </div>
        </div>
        </div>

    </>
}

export default Img;