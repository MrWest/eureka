import React from "react";
import { makeStyles } from '@mui/styles';
import ContentContainer from "../ContentContainer";
import BackgroundContainer from "./BackgroundContainer";
import Content from "./Content";
import { Grid } from "@mui/material";

const text = []; 

const useStyles = makeStyles({
    title: {
        color: 'black',
        fontSize: 18,
        marginTop: 0,
        marginBottom: 6
    },
    description: {
        fontSize: 16,
        color: 'black',
        marginTop: 0
    },
    aboutUsWrapper: { position: 'relative' },
    aboutUs: { position: 'absolute', zIndex: 1 }
});

const AboutUs = () => {
const classes = useStyles();
return (
    <ContentContainer background="url(/images/home/eco-hand.png)" right ident="eureka">
        <BackgroundContainer bgSettings="transparent 40% 79.3%, rgba(112, 112, 112, 0.5) 40%" inverse/>
        <Content>
            <Grid container style={{ height: '100%' }}>
                <Grid item xs={8}>
                    <div className={classes.aboutUsWrapper}>
                        <div id="eureka" className={classes.aboutUs}>
                            <h4 className={classes.title}>Acerca de Nosotros</h4>
                            <p style={{ width: '70%'}} className={classes.description}><strong>Eureka:</strong> Es en la carrera incesante por alcanzar los sueños, que nace  Eureka. Somos un grupo de jóvenes emprendedores que comparten  un objetivo en común: hacer de Eureka un proyecto de vida para la gran  familia angolana de la cual serán parte sus clientes, sus usuarios y usted que  constituye un eslabón indispensable para el éxito de esta maravillosa experiencia.</p>
                            <p style={{ width: '90%'}}><strong>Visión:</strong> Ser el referente y apoyo indispensable de todo empresario y servidor público en materia de inversiones en Angola. Además, promueve un espacio donde los empresarios y líderes del sector  de la Ingeniería y Diseño en Angola, puedan encontrar profesionales altamente calificados, capaces de  llevar a cabo las ideas más elegantes y renovadoras.</p>
                            <p style={{ width: '100%'}}><strong>Misión:</strong> Contribuir a la mejora y excelencia de los sectores de los Proyectos de Ingeniería, Arquitectura, Diseño Industrial y Diseño Gráfico en Angola; mediante la prestación de servicios de alta calidad técnica y profesional, así como del fomento de proyectos de I+D.   
                            Elevar la eficiencia del proceso inversionista angolano en todas sus etapas, así como su rentabilidad y resultados económicos y sociales, a través de estudios, asesorías y consultorías de alta calidad y valor agregado.</p>
                            <p style={{ width: '80%'}}><strong>Diferenciación y Excelencia:</strong> Servicios de excelencia y alto valor agregado. Servicios Orientados al Cliente. Elevada  calidad y eficiencia. Alta competencia profesional, capacitación y formación con  enfoque profesional. Investigación e innovación sistemática en materia de  impacto y actualidad científico-técnica.</p>
                            <p style={{ width: '60%'}}><strong>Impacto Social y Ambiental:</strong> Desarrollo Sustentable. Mejores resultados económicos, sociales  y ambientales en la nación. Optimización de los recursos  financieros destinados a las inversiones y al desarrollo  de proyectos de investigación y desarrollo. Empresas  y gobiernos locales más eficientes. Desarrollo local  y encadenamientos productivos. Elevar la  preparación de empresarios y servidores  públicos en Angola..</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Content>
    </ContentContainer>
);
};

export default AboutUs;
