import React from "react";
import { makeStyles } from '@mui/styles';
import ContentContainer from "../ContentContainer";
import BackgroundContainer from "./BackgroundContainer";
import Content from "./Content";
import { Grid } from "@mui/material";
import Carousel from "../Carousel";

const useStyles = makeStyles({
    servicesSection: {
        zIndex: 1
     },
});

const Services = () => {
const classes = useStyles();
return (
    <ContentContainer background="url(/images/home/blue-office.png)">
        <BackgroundContainer bgSettings="white 28%, transparent 28% 55%, #333333 45%" />
        <Content>
            <Grid id="services" container justifyContent="right" className={classes.servicesSection}>
                <Grid xs={6}>
                    <Carousel>
                        <h1>jajaja</h1>
                        <h1>jejeje</h1>
                        <h1>jojojo</h1>
                    </Carousel>
                </Grid>
            </Grid>
        </Content>
    </ContentContainer>
);
};

export default Services;
