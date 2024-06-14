import React from "react";
import { Link } from "react-router-dom";
import "./style.css";



const Navbar = () => {
    return (
        <>
            <div className="navbar-container bg-black text-white flex items-center justify-between h-20 mx-auto w-full sm:px-8 md:px-16 lg:px-[119px]">
                <div className="logo">
                    <img src="https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/logo/logo.png" alt="Logo" />
                </div>
                {/* responsive */}
                <label htmlFor="main-checkbox">
                    <i className="fa-solid fa-bars"></i>
                </label>

                <input type="checkbox" id="main-checkbox"></input>


                <ul className="nav-menu flex gap-4 list-none">
                    <li className="home-1"><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/blog"}>Blog</Link></li>
                    <li><Link to={"/page"}>Page</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/booking"}>Booking</Link></li>
                    <button className="bg-white text-black px-4 py-4">Buy Now</button>
                </ul>

                <div className="navbar-btn">
                    <button className="bg-[#ffc42b] text-white rounded">Book Now</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
