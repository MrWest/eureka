import React from "react";
import { makeStyles } from '@mui/styles';
import ContentContainer from "../ContentContainer";
import BackgroundContainer from "./BackgroundContainer";

const useStyles = makeStyles({
 container: {
     height: 660,
     position: 'relative'
 },
 primaryRegion: {
	height: '100%'
 },
regionTop: {
	height: '50%',
    backgroundImage: 'linear-gradient(40deg, transparent 52.2%, #ffcc33 52% 79.2%, #333333 28%)',
},
regionBottom: {
	height: '50%',
    backgroundImage: 'linear-gradient(140deg, transparent 52.2%, #ffcc33 52% 79.2%, #333333 28%)',
},
secondaryRegionTop: {
	height: '50%',
    backgroundImage: 'linear-gradient(140deg, transparent 55.2%, #ffcc33 54% 82.2%, #333333 28%)',
},
secondaryRegionBottom: {
	height: '50%',
    backgroundImage: 'linear-gradient(40deg, transparent 55.2%, #ffcc33 54% 82.2%, #333333 28%)',
},
secondaryRegion: {
    top: '18%',
    left: '-30%',
    zIndex: -1,
    width: '100%',
    position: 'absolute',
    height: '80vh'
}
});

const ContactUs = () => {
const classes = useStyles();
return (
    <ContentContainer>
        <BackgroundContainer bgSettings="transparent 52.2%, #ffcc33 52% 79.2%, #333333 28%" inverse/>
        <div className={classes.secondaryRegion}>
            <BackgroundContainer bgSettings="transparent 55.2%, #ffcc33 54% 82.2%, #333333 28%"/>
        </div>
    </ContentContainer>
);
};

export default ContactUs;
