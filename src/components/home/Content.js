import React from "react";
import { makeStyles } from '@mui/styles';
import { Grid } from "@mui/material";

const useStyles = makeStyles({
 container: {
     height: '100%',
     width: '100%'
 }
});

const Content = ({ children }) => {
const classes = useStyles();
return (
        <Grid container alignItems="center" justifyContent="center" className={classes.container}>
            {children}
        </Grid>
    );
};

export default Content;
