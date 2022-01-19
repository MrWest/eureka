import { Button, Drawer } from "@mui/material";
import React from "react";
import Menu from "../Menu";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Landing from "./Landing";
import Services from "./Services";
import SocialMedia from "./SocialMedia";

const Home = () => {
const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <div>
            {/* {!isMenuOpen && <Button onClick={() => setIsMenuOpen(true)}>menu</Button>} */}
            <Menu />
            <Landing />
            <AboutUs />
            <Services />
            <ContactUs />
            <SocialMedia />
            <Drawer
                anchor="right"
                open={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            >
                <div>
                    <p>Inicio</p>
                    <p>Eureka</p>
                    <p>Servicio</p>
                </div>
            </Drawer>

        </div>
    );

};

export default Home;
