import React from "react";
import "./style.css";



const Footer = () => {
    return <>
        <div className="outer-footer">
            <div className="main-footer-container">

                <div className="heading-footer">
                    <h5>______News Letter</h5>
                    <h3 class="">Subscribe to our newsletter</h3>
                    <div className="line">
                        <input className="footer-email" type="email" placeholder="Enter Your Email Here..." />
                        <button className="footer-btn bg-[#ffc42b] text-white">Subscribe</button>
                        </div>
                </div>


                <div className="inner-footer">
                    <div className="first-footer">
                        <img src="https://demo.misbahwp.com/taxi-booking/wp-content/uploads/sites/94/2024/05/logo-5.png"></img>

                        <div className="mails-1">
                            <div className="phone">
                                <i class="fa-solid fa-phone"></i>
                                (+81) 1234-56789
                            </div>

                            <div className="email">
                                <i class="fa-solid fa-envelope"></i>
                                cabbooking@example.com
                            </div>
                            <h4 className="footer-para">Follow Me</h4>

                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="third-footer">
                        <h4>Categories</h4>
                        {/* <hr></hr> */}
                        <ul className="footer-ul">
                            <li>Cab Booking(6)</li>
                            <li>Recent blog(8)</li>
                            <li>Uncategorized</li>
                        </ul>
                    </div>


                    {/* 3 */}
                    <div className="two-footer">
                        <h4>Links</h4>
                        {/* <hr></hr> */}
                        <ul className="footer-ul">
                            <li>Home</li>
                            <li>Blog</li>
                            <li>Booking</li>
                            <li>Cart</li>
                            <li>Checkout</li>
                            <li>Contact</li>
                            {/* <button>Buy Now</button> */}

                        </ul>
                    </div>


                    {/* 4 */}
                    <div className="last-footer">
                        <h4>Recent Post</h4>
                        {/* <hr></hr> */}
                        <div className="recent-1">
                            <img src="https://demo.misbahwp.com/taxi-booking/wp-content/uploads/sites/94/2024/05/recent-blog8.png"></img>
                            <div className="inner-recent-1">
                                <h5>Sed do eiusmod tempor incididunt</h5>
                                <h1>admin</h1>
                            </div>
                        </div>

                        <div className="recent-1">
                            <img src="https://demo.misbahwp.com/taxi-booking/wp-content/uploads/sites/94/2024/05/recent-blog7.png"></img>
                            <div className="inner-recent-1">
                                <h5>Sed do eiusmod tempor incididunt</h5>
                                <h1>admin</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}



export default Footer;