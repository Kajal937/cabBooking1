import React from "react";
import Navbar from "../../components/homepge/navbar";
import Img from "../../components/homepge/img";
import OurService from "../../components/homepge/ourService";
import Traffic from "../../components/homepge/traffic";
import Testimonals from "../../components/testimonals";
import Cab from "../../components/homepge/cab";
import Driver from "../../components/homepge/driver";
import Coupon from "../../components/homepge/coupon";
import Vehicle from "../../components/homepge/vehicle";
import Partners from "../../components/homepge/partners";
import Footer from "../../components/homepge/footer";



const Home = () => {
    return <>
        <Navbar />
        <Img />
        <OurService />
        <Traffic />
        <Testimonals />
        <Cab />
        <Driver />
        <Coupon/>
        <Vehicle/>
        <Partners/>
        <Footer/>

    </>
}

export default Home;