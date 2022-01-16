import React from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
 container: {
     height: '80vh',
     border: '1px solid red',
     position: 'relative'
 },
 triangleGolden: {
    position: 'absolute',
    top: 0,
	width: 0,
	height: 0,
	borderTop: '40vh solid transparent',
	borderRight: '60vh solid #ffcc33',
	borderBottom: '40vh solid transparent'
},
parallelogramTop: {
	height: '50%',
    backgroundImage: 'linear-gradient(135deg, white 33%, #ffcc33 33% 67%, #333333 33%)',
},
parallelogramBottom: {
	height: '50%',
    backgroundImage: 'linear-gradient(45deg, white 33%, #ffcc33 33% 67%, #333333 33%)',
}
});

const Landing = () => {
const classes = useStyles();
return (
    <div className={classes.container}>
        <div className={classes.parallelogramTop} />
        <div className={classes.parallelogramBottom} />
    </div>
);
};

export default Landing;
