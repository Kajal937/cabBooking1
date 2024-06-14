import React from "react";
import "./style.css";

const Traffic = () => {
    const traffic = [
        {
            p: "$26",
            button: "Base",
        },
        {
            p: "$36",
            button: "Popular",
        },
        {
            p: "$16",
            button: "Enterprise",
        },
    ];

    return (
        <div className="outer-container-00">
            <div className="traffic-container">
                <h5>_____Our Traffic Plan</h5>
                <h3>Choose the plan that’s right for you</h3>

                <div className="traffic-00">
                    {traffic.map((value, index) => (
                        <div className="traffic-card bg-white" key={index}>
                            <div className="inner-traiffic-1">
                                <i className="fa-solid fa-car"></i>
                                <div className="plan">
                                    <p>
                                        {value.p} <span className="span-0">/per KM</span>
                                    </p>
                                </div>
                                <button className="btnnn">{value.button}</button>
                            </div>
                            <div className="input-container">
                                <div>
                                    <input type="checkbox" name={`one-${index}`} checked />
                                    <label htmlFor={`one-${index}`}>Seating Capacity: 2+1</label>
                                </div>
                                <div>
                                    <input type="checkbox" name={`ac-${index}`} checked />
                                    <label htmlFor={`ac-${index}`}>AC</label>
                                </div>
                                <div>
                                    <input type="checkbox" name={`toll-${index}`} checked />
                                    <label htmlFor={`toll-${index}`}>Toll/Parking Charges</label>
                                </div>
                                <div>
                                    <input type="checkbox" name={`taxes-${index}`} checked />
                                    <label htmlFor={`taxes-${index}`}>Taxes</label>
                                </div>
                                <div>
                                    <input type="checkbox" name={`airport-${index}`} checked />
                                    <label htmlFor={`airport-${index}`}>Airport Departure</label>
                                </div>
                                <div>
                                    <input type="checkbox" name={`clean-${index}`} checked />
                                    <label htmlFor={`clean-${index}`}>Clean & Sanitized Car</label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Traffic;
