import React from "react";
import { Button, Collapse, Grid, IconButton, Link, Slide } from "@mui/material";
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';
import { makeStyles, useTheme } from "@mui/styles";
import { useLocation } from "react-router-dom";
import SwipeableViews from "react-swipeable-views/lib/SwipeableViews";

const useStyles = makeStyles(theme => ({
    menuWrapper: {
       height: '60vh'
    },
    viewContainer: {
        zIndex: 3
    },
    linkButton: { 
        color: theme.palette.primary.main,
        '&:hover': { color: 'white' },
        '&:disabled': { color: theme.palette.secondary.main }
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

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div>{children}</div>
        )}
      </div>
    );
  };

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
    setIndex(index < views.length - 1 ? index + 1 : 0);
};

const handlePrevious = () => {
    setDirection('left');
    setIndex(index >= 1 ? index - 1 : views.length -1);
};
const handleChangeIndex = (index) => {
    setValue(index);
  };

const theme = useTheme();

const classes = useStyles();

if(views.length === 0) return null;
    return (
        <Grid container alignItems="center">
            <Grid item xs={2}>
                <IconButton disabled={index === 0} className={classes.linkButton} onClick={handlePrevious}>
                    <ArrowBack />
                </IconButton>
            </Grid>
            <Grid item xs ref={containerRef}>
            <SwipeableViews
                axis={'x'}
                index={index}
                onChangeIndex={handleChangeIndex}
            >
                {views.map(v => (
                    <div key={v.name} value={index} index={0} dir={theme.direction}>
                        {v}
                    </div>
                ))}
          </SwipeableViews>
            </Grid>
            <Grid item xs={2}>
                <IconButton  disabled={index === views.length - 1} className={classes.linkButton} onClick={handleNext}>
                    <ArrowForward />
                </IconButton>
            </Grid>
        </Grid>
    );

};

export default Carousel;
