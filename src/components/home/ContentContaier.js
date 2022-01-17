import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";

const useStyles = makeStyles(theme => ({
    content: {
        width: 1224,
        [theme.breakpoints.up('lg')]: {
            // border: '1px solid red'
        },
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    section: {
        // backgroundImage: ({ fullWhite }) => fullWhite ? console.log('xxx: ', fullWhite) : 'linear-gradient(90deg, transparent 0% 70%, #333333 30%)'
    }
}));

const ContentContainer = ({ children, fullWhite }) => {
const classes = useStyles(fullWhite);
    return (
        <Grid container justifyContent="center" className={classes.section}>
            <Grid item>
                <div className={classes.content}>
                 {children}
                </div>
            </Grid>
        </Grid>
    );
};

export default ContentContainer;
