import React from "react";
import { makeStyles } from '@mui/styles';
import ContentContainer from "./ContentContaier";
import BackgroundContainer from "./BackgroundContainer";
import { Grid } from "@mui/material";
import Content from "./Content";

const subtile = {
    color: '#ffffff',
    fontSize: 32,
    width: 420,
    margin: 0
};

const useStyles = makeStyles({
 container: {
     height: 660,
     position: 'relative'
 },
regionTop: {
	height: '50%',
    backgroundImage: 'linear-gradient(140deg, white 28%, #ffcc33 28% 55%, #333333 45%)',
},
regionBottom: {
	height: '50%',
    backgroundImage: 'linear-gradient(40deg, white 28%, #ffcc33 28% 55%, #333333 45%)',
},
dot: {
	height: 30,
    width: 30,
    borderRadius: '50%',
    background: '#333333',
    position: 'relative'
},
title: {
    height: 240,
    width: 760,
    marginRight: 200,
    marginLeft: 65,
    marginBottom: 32
},
primarySubtile: {
    ...subtile,
    transform: 'rotate(-40deg) translateX(180px)  translateY(-130px)'
},
secondSubtile: {
    ...subtile,
    transform: 'rotate(40deg) translateX(180px)  translateY(90px)'
}
});

const Landing = () => {
const classes = useStyles();
return (
    <ContentContainer>
        <div className={classes.container}>
            <BackgroundContainer>
                <div className={classes.regionTop} />
                <div className={classes.regionBottom} />
            </BackgroundContainer>
            <Content>
                <Grid item>
                  <Grid container alignItems="center" justifyContent="center">
                      <Grid item>
                        <div className={classes.dot}>
                            <h4 className={classes.primarySubtile}>Consultoria a Inversiones</h4>
                            <h4 className={classes.secondSubtile}>Ingenieria y Diseño</h4>
                        </div>
                      </Grid>
                       <Grid item>
                           <img src="/images/home/eureka.png" alt="Eureka" className={classes.title} />
                       </Grid>
                  </Grid>
                </Grid>
            </Content>
        </div>
    </ContentContainer>
);
};

export default Landing;
