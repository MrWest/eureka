import React from "react";
import { makeStyles } from '@mui/styles';
import ContentContainer from "./ContentContaier";

const useStyles = makeStyles({
 container: {
     height: 660,
     position: 'relative',
     backgroundImage: 'url(/images/home/blue-office.png)',
     backgroundSize: "contain",
     backgroundPosition: "top left"   
 },
regionTop: {
	height: '50%',
    backgroundImage: 'linear-gradient(140deg, white 28%, transparent 28% 55%, #333333 45%)',
},
regionBottom: {
	height: '50%',
    backgroundImage: 'linear-gradient(40deg, white 28%, transparent 28% 55%, #333333 45%)',
}
});

const Services = () => {
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

export default Services;
