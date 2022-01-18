import React from "react";
import { makeStyles } from '@mui/styles';
import ContentContainer from "./ContentContaier";
import BackgroundContainer from "./BackgroundContainer";

const useStyles = makeStyles({
});

const Services = () => {
const classes = useStyles();
return (
    <ContentContainer background="url(/images/home/blue-office.png)">
        <BackgroundContainer bgSettings="white 28%, transparent 28% 55%, #333333 45%" />
    </ContentContainer>
);
};

export default Services;
