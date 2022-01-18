import React from "react";
import { makeStyles } from '@mui/styles';
import ContentContainer from "./ContentContaier";
import BackgroundContainer from "./BackgroundContainer";

const useStyles = makeStyles({
});

const AboutUs = () => {
const classes = useStyles();
return (
    <ContentContainer background="url(/images/home/eco-hand.png)" right>
        <BackgroundContainer bgSettings="transparent 40% 79.3%, rgba(112, 112, 112, 0.5) 40%" inverse/>
    </ContentContainer>
);
};

export default AboutUs;
