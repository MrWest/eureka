import React from "react";
import { makeStyles } from '@mui/styles';
import ContentContainer from "../ContentContainer";
import BackgroundContainer from "./BackgroundContainer";

const useStyles = makeStyles({
});

const SocialMedia = () => {
// const classes = useStyles();
return (
    <ContentContainer>
        <BackgroundContainer bgSettings="transparent 22.5%, #666666 20% 44.2%, #333333 40%" single />
    </ContentContainer>
);
};

export default SocialMedia;
