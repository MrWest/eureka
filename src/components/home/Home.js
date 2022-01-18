import React from "react";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Landing from "./Landing";
import Services from "./Services";
import SocialMedia from "./SocialMedia";

const Home = () => {

    return (
        <div>
            <Landing />
            <AboutUs />
            <Services />
            <ContactUs />
            <SocialMedia />
        </div>
    );

};

export default Home;
