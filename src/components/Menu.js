import React from "react";
import { Button, Grid, Link } from "@mui/material";
import ContentContainer from "./ContentContainer";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    menuWrapper: {
       height: '60vh'
    },
    menuContainer: {
        padding: '60px 0px',
        overflow: 'hidden',
        paddingRight: 0,
        width: 300,
        transform: 'translateX(50%)',
        backgroundImage: 'linear-gradient(90deg, rgba(45, 45, 45, 0.5) 50%, transparent 50%)',
        borderRadius: '50%',
        position: 'fixed',
        zIndex: 3
    },
    linkButton: { 
        width: '100%',
        textAlign: 'left',
        paddingRight: 16,
        textTransform: 'none',
        paddingLeft: 0,
        color: 'white',
        '&:hover': { color: theme.palette.primary.main }
    }

}));

const menuLinks = [
    { name: 'Inicio', url: '/#' },
    { name: 'Eureka', url: '/#eureka' },
    { name: 'Servicios', url: '/#services' },
    { name: 'Nuestro Equipo', url: '/#team' },
    { name: 'Contactenos', url: '/#contact-us' },
    { name: 'Blog', url: '/' }
]

const Menu = () => {
const [isMenuOpen, setIsMenuOpen] = React.useState(false);

const classes = useStyles();
    return (
        <ContentContainer position="absolute">
            <Grid container justifyContent="right" alignItems="center" style={{ height: '100%' }}>
                <Grid item>
                    <Grid container alignItems="center" justifyContent="right" className={classes.menuWrapper}>
                        <Grid item className={classes.menuContainer}>
                            <Grid container>
                                <Grid item xs={6}>
                                    {menuLinks.map(link => (
                                    <div key={link.name}>
                                        <Button className={classes.linkButton} href={link.url} LinkComponent={Link}>
                                            <Grid container justifyContent="right">
                                                {link.name}
                                            </Grid>
                                        </Button>
                                    </div>
                                ))}
                                </Grid>
                            </Grid>
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>
        </ContentContainer>
    );

};

export default Menu;
