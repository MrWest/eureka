import React from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
 container: {
     height: 660,
     width: '100%',
     position: 'absolute'
 },
 topRegion: {
     height: ({ single }) => single ? '100%' : '50%',
     backgroundImage: ({ bgSettings, inverse }) => `linear-gradient(${inverse ? 40 : 140}deg, ${bgSettings})`
 },
 bottomRegion: {
     height: '50%',
     backgroundImage: ({ bgSettings, inverse }) => `linear-gradient(${inverse ? 140 : 40}deg, ${bgSettings})`
 }
});

const BackgroundContainer = ({ bgSettings, inverse, single }) => {
const classes = useStyles({ bgSettings, inverse, single });
return (
        <div className={classes.container}>
            <div className={classes.topRegion} />
            {!single && <div className={classes.bottomRegion} />}
        </div>
    );
};

export default BackgroundContainer;
