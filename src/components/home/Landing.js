import React from "react";
import { makeStyles } from '@mui/styles';
import ContentContainer from "../ContentContainer";
import BackgroundContainer from "./BackgroundContainer";
import { Grid } from "@mui/material";
import Content from "./Content";
import Image from "next/image";

const subtile = {
    color: '#ffffff',
    fontSize: 32,
    width: 420,
    margin: 0
};

const useStyles = makeStyles({
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
    marginBottom: 32,
    position: 'relative'
},
primarySubtile: {
    ...subtile,
    transform: 'rotate(-40deg) translateX(180px)  translateY(-130px)'
},
secondSubtile: {
    ...subtile,
    transform: 'rotate(40deg) translateX(180px)  translateY(85px)'
}
});

const Landing = () => {
const classes = useStyles();
return (
    <ContentContainer>
            <BackgroundContainer bgSettings="white 28%, #ffcc33 28% 55%, #333333 45%" />
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
                           <div className={classes.title}>
                            <Image src="/images/home/eureka.png" alt="Eureka" layout="fill" />
                           </div>
                       </Grid>
                  </Grid>
                </Grid>
            </Content>
    </ContentContainer>
);
};

export default Landing;
