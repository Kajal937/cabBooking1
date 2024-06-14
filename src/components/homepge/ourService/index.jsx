import React from "react";
import "./style.css";

const OurService = () => {

    const service = [
        {
            h6: "Baggage Transport",
            p: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etean new dolore.",
            h5: "Read More"
        },
        {
            h6: "Rapid City Transfer",
            p: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etean new dolore.",
            h5: "Read More"
        },
        {
            h6: "Airport Transfer",
            p: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etean new dolore.",
            h5: "Read More"
        },
        {
            h6: "Booking A Hotel",
            p: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etean new dolore.",
            h5: "Read More"
        },
    ]


    return <>
        <div className="outer-service-card">
            <div className="service-container">
                <div className="left-service-container">
                    <h5 className="h5-color">____ Our Service</h5>
                    <h3 className=" h3-color text-2xl font-semibold">Save your time with our best service</h3>
                    <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. isus commodo viverra maecenas accumsan lacus vel facilisis and the part of new memory. </p>
                    <h6 className=" heading-color">The best way to get wherever you’re going</h6>
                    <h4 className="h-color text-[#ffc42b]">+81 254781-134445</h4>
                    <img src="https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/services/services.png"></img>
                </div>


                <div className="right-service-container">
                    {service.map((index, value) => (
                        <div className="service-card">
                            <i class="fa-solid fa-car"></i>
                            {/* <i class="fa-solid fa-plane-departure"></i>
                          <i class="fa-solid fa-building"></i>
                         <i class="fa-solid fa-car"></i> */}
                            <h6>{index.h6}</h6>
                            <hr className="hr-color"></hr>
                            <p>{index.p}</p>
                            <h5 className="heading-5 text-[#ffc42b]">{index.h5}</h5>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    </>
}


export default OurService;