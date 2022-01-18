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
    container: {
        height: 660,
        position: 'relative',
        backgroundImage: ({ background }) => background,
        backgroundSize: "contain",
        backgroundPosition:({ right }) => `bottom ${right ? 'right' : 'left'}`,
        backgroundRepeat: 'no-repeat'
    },
    section: {
        // backgroundImage: ({ fullWhite }) => fullWhite ? console.log('xxx: ', fullWhite) : 'linear-gradient(90deg, transparent 0% 70%, #333333 30%)'
    }
}));

const ContentContainer = ({ children, fullWhite, background, right }) => {
const classes = useStyles({ fullWhite, background, right });
    return (
        <Grid container justifyContent="center" className={classes.section}>
            <Grid item>
                <div className={classes.content}>
                    <div className={classes.container}>
                        {children}
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

export default ContentContainer;
