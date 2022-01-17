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
    backgroundImage: 'linear-gradient(145deg, white 40%, #ffcc33 40% 60%, #333333 40%)',
},
regionBottom: {
	height: '50%',
    backgroundImage: 'linear-gradient(35deg, white 40%, #ffcc33 40% 60%, #333333 40%)',
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

const Landing = () => {
const classes = useStyles();
return (
    <ContentContainer>
        <div className={classes.container}>
            <div className={classes.regionTop} />
            <div className={classes.regionBottom} />
            <div className={classes.dot} />
            <h1 className={classes.title}>Eureka</h1>
        </div>
    </ContentContainer>
);
};

export default Landing;
