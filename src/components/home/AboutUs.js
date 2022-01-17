import React from "react";
import { makeStyles } from '@mui/styles';
import ContentContainer from "./ContentContaier";

const useStyles = makeStyles({
 container: {
     height: '80vh',
     position: 'relative'
 },
regionTop: {
	height: '50%',
    backgroundImage: 'linear-gradient(40deg, white 40% 79.3%, #666666 40%)',
},
regionBottom: {
	height: '50%',
    backgroundImage: 'linear-gradient(140deg, white  40% 79.3%, #666666 40%)',
},
dot: {
	height: 30,
    width: 30,
    borderRadius: '50%',
    background: '#333333',
    position: 'absolute',
    left: '20%',
    top: 'calc(50% - 15px)'
},
title: {
    fontSize: 132,
    position: 'absolute',
    left: '28%',
    top: 'calc(50% - 182px)',
    color: '#336699'
}
});

const AboutUs = () => {
const classes = useStyles();
return (
    <ContentContainer>
        <div className={classes.container}>
            <div className={classes.regionTop} />
            <div className={classes.regionBottom} />
        </div>
    </ContentContainer>
);
};

export default AboutUs;
