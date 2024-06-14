import React from "react";
import "./style.css";


const Testimonals = () => {

    const menu = [
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/testimonial/testimonial1.png",
            h4: "Jasmine Karen",
            h6: "UI Designer",
            p: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquises ipsum suspendisse ultrices gravidasus comesmodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/testimonial/testimonial2.png",
            h4: "Hannah Kimberly",
            h6: "UI Designer",
            p: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquises ipsum suspendisse ultrices gravidasus comesmodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/testimonial/testimonial1.png",
            h4: "Tracey Dylan",
            h6: "UI Designer",
            p: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquises ipsum suspendisse ultrices gravidasus comesmodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            img: "https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/testimonial/testimonial4.png",
            h4: "Anderson Campbell",
            h6: "UI Designer",
            p: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquises ipsum suspendisse ultrices gravidasus comesmodo viverra maecenas accumsan lacus vel facilisis."
        },



    ]

    return <>

        <div className="testimonals-container">

            <div className="left-testimonsla">
                <h4>_____ Testimonials</h4>
                <h1>What our customer’s say about us</h1>
                <div className="users-rate">
                    <i className="fa-solid fa-award"></i>
                    <h2>3000+ User Rated Us 4.95 out of 5.</h2>
                </div>
            </div>


            <div className="right-testimonals">
                {menu.map((index, value) => (
                    <div className="testimonals-card1">
                        <div className="testimonals-img">
                            <img src={index.img}></img>
                            <div className="heading-testimonals">
                                <h4>{index.h4}</h4>
                                <h6>{index.h6}</h6>
                            </div>
                        </div>

                        <div className="testimonals-para">
                            <p>{index.p}</p>
                        </div>
                    </div>

                ))}

            </div>

        </div>
    </>
}


export default Testimonals;