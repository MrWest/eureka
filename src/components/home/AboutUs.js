import React from "react";
import { makeStyles } from '@mui/styles';
import ContentContainer from "./ContentContaier";

const useStyles = makeStyles({
 container: {
     height: 660,
     position: 'relative',
     backgroundImage: 'url(/images/home/eco-hand.png)',
     backgroundSize: "contain",
     backgroundPosition: "bottom right",
     backgroundRepeat: 'no-repeat'
 },
regionTop: {
	height: '50%',
    backgroundImage: 'linear-gradient(40deg, transparent 40% 79.3%, rgba(112, 112, 112, 0.5) 40%)',
},
regionBottom: {
	height: '50%',
    backgroundImage: 'linear-gradient(140deg, white 52.3%, transparent  40% 79.3%, rgba(112, 112, 112, 0.5)   40%)',
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
