import React from "react";
import { makeStyles } from '@mui/styles';
import ContentContainer from "../ContentContainer";
import BackgroundContainer from "./BackgroundContainer";
import Content from "./Content";
import { Grid } from "@mui/material";
import { generatedLines } from "../../utils/commonFunctions";
import Image from "next/image";

const container = {
    zIndex: 2,
    width: 384,
    padding: '32px 0px'
};

const useStyles = makeStyles(theme => ({
    contentLeft: { transform: 'skew(50deg)', margin: 0, fontSize: 14 },
    paragraph: { marginBottom: 4 },
    containerLeft: {
        ...container,
        transform: 'skew(-50deg)'
    },
    title: {
        height: 240,
        width: 760,
        marginRight: 200,
        marginLeft: 65,
        marginBottom: 32,
        position: 'relative',
        textAlign: 'center'
    },
    bottomTitle: {
        color: '#ffffff',
        fontSize: 32,
        textAlign: 'center',
        zIndex: 1,
        marginBottom: 12
    },
    bottomSubTitle: {

        color: theme.palette.primary.main,
        fontSize: 32,
        textAlign: 'center',
        margin: 0,
        zIndex: 1
    }
}));

const contactUsText = 'Puede encontrarnos de lunes a viernes de 08:00 a 17:00 en nuestra oficina principal o puede seguirnos en nuestras redes sociales de Instagram, Facebok o Google+. '
const SocialMedia = () => {
const classes = useStyles();
return (
    <ContentContainer>
        <BackgroundContainer bgSettings="transparent 22.5%, #666666 20% 44.2%, #333333 40%" single />
        <Content>
            <Grid container justifyContent="center" style={{ height: '100%' }}>
                <Grid item>
                    <div className={classes.containerLeft}>
                        <div className={classes.paragraph}>
                            {generatedLines(contactUsText).map(line => (<p key={line} className={classes.contentLeft}><span>{line}</span></p>))}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <div className={classes.title}>
                                <Image src="/images/home/eureka.png" alt="Eureka" layout="fill" />
                            </div>
                        </Grid>
                    <h2 className={classes.bottomTitle}>Empresa de Ingenieria, Diseno y Consultoria a Inversiones</h2>
                    <h4 className={classes.bottomSubTitle}>una idea, un sueno, una realidad</h4>
                    </Grid>
                </Grid>
            </Grid>
        </Content>
    </ContentContainer>
);
};

export default SocialMedia;
