import React from "react";
import { Button, Collapse, Grid, IconButton, Link, Slide } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ContentContainer from "./ContentContainer";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    menuWrapper: {
       height: '60vh'
    },
    menuContainer: {
        padding: '60px 0px',
        paddingRight: 0,
        overflow: 'hidden',
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
        paddingRight: 24,
        textTransform: 'none',
        paddingLeft: 0,
        color: 'white',
        '&:hover': { color: theme.palette.primary.main }
    },
    menuOpenerWrapper: { position: 'relative', width: 16 },
    menuOpener: {  
        zIndex: 3,
        color: theme.palette.primary.main,
        background: 'rgba(45, 45, 45, 0.5)',
        position: 'fixed',
        top: 323,
        height: 16,
        width: 16,
        '& svg': {
            height: 12,
            width: 12
        }
     },
    menuCloser: { 
        color: 'white',
        background: 'rgba(45, 45, 45, 0.5)',
        position: 'fixed',
        top: 'calc(50% - 7px)',
        right: '50%',
        height: 16,
        width: 16,
        '& svg': {
            height: 12,
            width: 12
        }
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
const [isMenuOpen, setIsMenuOpen] = React.useState(true);
const containerRef = React.useRef(null);
// const location = useLocation();

const classes = useStyles();
    return (
        <ContentContainer position="absolute">
            <Grid container justifyContent="right" alignItems="center" style={{ height: '100%', overflow: 'hidden' }} ref={containerRef}>
                <Grid item >
                    {!isMenuOpen && (
                        <div className={classes.menuOpenerWrapper}>
                            <IconButton className={classes.menuOpener} onClick={() => setIsMenuOpen(true)}><MenuIcon /></IconButton>
                        </div>
                    )}
                    <Slide direction="left" in={isMenuOpen} easing={{ enter: 'easyIn' }} container={containerRef.current}>
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
                                    <IconButton className={classes.menuCloser} onClick={() => setIsMenuOpen(false)}><MenuIcon /></IconButton>    
                                    </Grid>
                                </Grid>
                            </Grid> 
                        </Grid>
                    </Slide>
                </Grid>
            </Grid>
        </ContentContainer>
    );

};

export default Menu;
