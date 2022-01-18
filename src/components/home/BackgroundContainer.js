import React from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
 container: {
     height: 660,
     width: '100%',
     position: 'absolute',
     zIndex: -1
 }
});

const BackgroundContainer = ({ children }) => {
const classes = useStyles();
return (
        <div className={classes.container}>
            {children}
        </div>
    );
};

export default BackgroundContainer;
