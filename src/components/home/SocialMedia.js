import React from "react";
import { makeStyles } from '@mui/styles';
import ContentContainer from "./ContentContaier";

const useStyles = makeStyles({
 container: {
     height: 660,
     position: 'relative',
     backgroundSize: "contain",
     backgroundPosition: "top-left",   
 },
regionTop: {
	height: '50%',
    backgroundImage: 'linear-gradient(140deg, transparent 28%, #666666 28% 54.9%, #333333 46%)',
},
regionBottom: {
	height: '50%',
    backgroundImage: 'linear-gradient(140deg, white 3.7%, #666666 3.7% 30.6%, #333333 30.6% 100%)',
}
});

const SocialMedia = () => {
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

export default SocialMedia;
