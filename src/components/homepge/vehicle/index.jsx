import React from "react";
import "./style.css";

const Vehicle = () => {

    const vehicle = [
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/uploads/sites/94/2024/05/cab_booking6.png",
            h3: "Cab Booking",
        },
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/uploads/sites/94/2024/05/cab_booking1.png",
            h3: "Auto Booking",
        },
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/uploads/sites/94/2024/05/cab_booking2.png",
            h3: "Taxi Booking",
        },
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/uploads/sites/94/2024/05/cab_booking3.png",
            h3: "Car Booking",
        },
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/uploads/sites/94/2024/05/cab_booking4.png",
            h3: "Luxury car Booking",
        },
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/uploads/sites/94/2024/05/cab_booking5.png",
            h3: "Ambulance car Booking",
        },
    ]
    return <>

        <div className="vehicle-00">
            <div className="h-1">
                <h5>____ Choose Your Cab</h5>
                <h3>Select your favourite vehicle</h3>
            </div>
            <div className="cars">
                <img src="https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/cab_tab/cab_tab1.png"></img>
                <img src="https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/cab_tab/cab_tab2.png"></img>
                <img src="https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/cab_tab/cab_tab3.png"></img>
            </div>
            <hr className="hr-vehicle"></hr>


            <div className="vehicle-conatiner">
            {vehicle.map((v, index) => (
                <div className="card">
                    <div className="left-vehicle">
                        <img src={v.img}></img>
                    </div>


                    <div className="right-vehicle">
                        <h3>{v.h3}</h3>

                        <ul className="bags">
                            <li>4 Seater</li>
                            <li>Language Bags</li>
                        </ul>

                        <p className="para-0">Toll and State Tax: Included Free cancellation 24/7 customer helpline</p>

                        <div className="vehicle-end">
                            <span className="vehicle-span1">$230</span>
                            <button className="vehicle-btn">Book Now</button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
        </div>

       
    </>
}


export default Vehicle;