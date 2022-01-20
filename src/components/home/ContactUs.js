import React from "react";
import { makeStyles } from '@mui/styles';
import ContentContainer from "../ContentContainer";
import BackgroundContainer from "./BackgroundContainer";
import Content from "./Content";
import { Grid } from "@mui/material";
import { grid } from "@mui/system";
import { generatedLines } from "../../utils/commonFunctions";

const container = {
    zIndex: 2,
    width: 384,
    padding: '12px 0px'
};
const title = {  fontSize: 20, margin: 0, marginBottom: 0 };

const useStyles = makeStyles({
 containerRight: {
 ...container,
 transform: 'skew(50deg)',
 marginLeft: 64
 },
 containerLeft: {
    ...container,
    transform: 'skew(-50deg)'
 }, 
 wrapper: { height: '50%' },
 titleRight: { ... title, transform: 'skew(-50deg)' },
 titleLeft: { ... title, transform: 'skew(50deg)' },
 contentRight: { transform: 'skew(-50deg)', margin: 0, fontSize: 14 },
 contentLeft: { transform: 'skew(50deg)', margin: 0, fontSize: 14 },
 paragraph: { marginBottom: 4 },
secondaryRegion: {
    top: '18%',
    left: '-30%',
    zIndex: -1,
    width: '100%',
    position: 'absolute',
    height: 660
}
});

const usText = 'Somos un grupo de jóvenes emprendedores que comparten  un objetivo en común: hacer de Eureka un proyecto de vida para la gran  familia angolana de la cual serán parte sus clientes, sus usuarios y usted que  constituye un eslabón indispensable para el éxito de esta maravillosa experiencia.';
const usAlsoText = 'Nuestro equipo de trabajo está compuesto por un grupo de profesionales altamente calificados y entusiastas de distintas especialidades (ingenieri­a industrial, arquitectura, ingenieri­a civil, hidráulica, eli©ctrica, mecánica, automática, informática, disei±o gráfico e industrial, economi­a, etc.).'
const usFinnallyText = ' Contamos con ai±os de experiencia y resultados en el sector de la Ingenieri­a, el Disei±o  y la Consultori­a a Inversiones; con el apoyo del desarrollo de nuestras propias ti©cnicas, metodologi­as y herramientas  informáticas.';
const wePromote = 'La igualdad de oportunidades, la inclusión y equidad profesional, el emprendimiento y la innovación tecnológica. - El cumplimiento de las normas de buenas prácticas para la prestacion de servicios sustentables, en el sector de la Ingenierí­a, el Diseí±o y la Consultorí­a a Inversiones.';
const weAlsoPromote = 'Absoluta confidencialidad y seguridad de todas las informaciones generadas y transacciones de pago realizadas. - Un espacio donde encontrar asombrosos productos y el  asesoramiento profesional necesario, para elevar la calidad    de tus negocios y proyectos  a los más altos   estándares de la industria angola e    internacional.';

const ContactUs = () => {
const classes = useStyles();
const paragraph = (text, dir) => (<div className={classes.paragraph}>{generatedLines(text).map(line => (<p key={line} className={dir === 'right' ? classes.contentRight : classes.contentLeft}><span>{line}</span></p>))}</div>);
return (
    <ContentContainer ident="team">
        <BackgroundContainer bgSettings="transparent 52.2%, #ffcc33 52% 79.2%, #333333 28%" inverse/>
        <div style={{ position: 'relative' }}>
            <div className={classes.secondaryRegion}>
                <BackgroundContainer bgSettings="transparent 55.2%, #ffcc33 54% 82.2%, #333333 28%"/>
            </div>
        </div>
        <Content>
            <Grid  container justifyContent="right" className={classes.wrapper}>
                <Grid item xs={6}>
                    <div className={classes.containerRight}>
                        <h4 className={classes.titleRight}>Nuestro Equipo</h4>
                        {paragraph(usText, 'right')}
                        {paragraph(usAlsoText, 'right')}
                    </div>
                    <Grid container justifyContent="right" >
                        <Grid item>
                            <div className={classes.containerLeft}>
                                <h4 className={classes.titleLeft}>Contactenos</h4>
                                <p className={classes.contentLeft}><strong>Email: </strong> eureka@gmail.com</p>
                                <p className={classes.contentLeft}><strong>Telefono: </strong>  +244 746 652 21</p>
                                <p className={classes.contentLeft}><strong>Direccioon: </strong>   Orientados al Cliente. Elevada  calidad y eficiencia. Alta competencia profesional, capacitación</p>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container  className={classes.wrapper}>
                <Grid item xs={6}>
                    <Grid container justifyContent="right" style={{ marginTop: -200, marginLeft: 90 }}>
                        <Grid item>
                            <div className={classes.containerLeft} style={{ marginLeft: 12 }}>
                                <h4 className={classes.titleLeft}>Que Promovemos</h4>
                                {wePromote.split('-').map(sec => (paragraph(`-${sec}`)))}
                            </div>
                            <div className={classes.containerRight} style={{ marginRight: -32 }}>
                                {weAlsoPromote.split('-').map(sec => (paragraph(`-${sec}`, 'right')))}
                                <h5 className={classes.contentRight} style={{ fontSize: 16, textTransform: 'uppercase', marginLeft: 32, marginTop: 24 }}>Entonces que esperas? Unete anuestra gran aventura!</h5>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Content>
    </ContentContainer>
);
};

export default ContactUs;
