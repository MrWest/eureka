import React from "react";
import { makeStyles } from '@mui/styles';
import ContentContainer from "../ContentContainer";
import BackgroundContainer from "./BackgroundContainer";
import Content from "./Content";
import { Grid } from "@mui/material";
import Carousel from "../Carousel";

const useStyles = makeStyles({
    servicesSection: {
        zIndex: 1
     },
     title: { color: 'white', fontSize: 24, marginTop: 0, marginBottom: 0 },
     content: { color: 'white', textAlign: 'left' },
     container: { padding: '10px 20px' }
});

const ServiceItem = ({ classes, title, content }) => (
    <div className={classes.container}>
        <h4 className={classes.title}>{title}</h4>
        {content.map(c => (<p key={c} className={classes.content}>{c}</p>))}
        
    </div>
);

const Services = () => {
const classes = useStyles();
return (
    <ContentContainer background="url(/images/home/blue-office.png)">
        <BackgroundContainer bgSettings="white 28%, transparent 28% 55%, #333333 45%" />
        <Content>
            <Grid id="services" container justifyContent="right" className={classes.servicesSection}>
                <Grid xs={6}>
                    <Carousel>
                        <ServiceItem
                            classes={classes}
                            title="Servicios  Ingenieria y Diseño"
                            content={["Proyectos de Ingenieria,  Arquitectura, Diseño Industrial y  Diseño Grafico.", "Elaboracion de Presupuestos, cronogramas, Proyectos de Organizacion de Obra,  Plan de Calidad, Proyecto de  Seguridad y Salud en el  Trabajo, entre Otras  documentaciones  de Obra.", "Control de Autor, Certificaciones,  Fiscalizacion de Obras,  Control de Calidad,  y Administracion  de Obras"]}
                         />
                         <ServiceItem
                             classes={classes}
                             title="Consultoria a Inversionens"
                             content={["Proyectos de Ingenieria,  Arquitectura, Diseño Industrial y  Diseño Grafico.", "Elaboracion de Presupuestos, cronogramas, Proyectos de Organizacion de Obra,  Plan de Calidad, Proyecto de  Seguridad y Salud en el  Trabajo, entre Otras  documentaciones  de Obra."]}
                          />
                    </Carousel>
                </Grid>
            </Grid>
        </Content>
    </ContentContainer>
);
};

export default Services;
