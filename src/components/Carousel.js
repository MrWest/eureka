import React from "react";
import { Button, Collapse, Grid, IconButton, Link, Slide } from "@mui/material";
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
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

const Carousel = ({ children }) => {
const [index, setIndex] = React.useState(0);
const [views, setViews] = React.useState([]);
const [direction, setDirection] = React.useState('left');
const containerRef = React.useRef(null);

React.useEffect(() => {
    setViews(React.Children.toArray(children));
}, [children]);

const handleNext = () => {
    setDirection('right');
    setIndex(index < views.length ? index + 1 : 0);
};

const handlePrevious = () => {
    setDirection('left');
    setIndex(index < views.length ? index + 1 : 0);
};

const classes = useStyles();

if(views.length === 0) return null;
    return (
        <Grid container>
            <Grid item xs={2}>
                <IconButton onClick={handlePrevious}>
                    <ArrowBack />
                </IconButton>
            </Grid>
            <Grid item xs ref={containerRef}>
                <Slide direction={direction} container={containerRef.current}>
                    {views[index]}
                </Slide>
            </Grid>
            <Grid item xs={2}>
                <IconButton onClick={handleNext}>
                    <ArrowForward />
                </IconButton>
            </Grid>
        </Grid>
    );

};

export default Carousel;
