import React from "react";
import { makeStyles } from '@mui/styles';
import ContentContainer from "./ContentContaier";

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
        <div className={classes.container}>
            <div className={classes.primaryRegion}>
                <div className={classes.regionTop} />
                <div className={classes.regionBottom} />
            </div>
            <div className={classes.secondaryRegion}>
                <div className={classes.secondaryRegionTop} />
                <div className={classes.secondaryRegionBottom} />
            </div>
        </div>
    </ContentContainer>
);
};

export default ContactUs;
