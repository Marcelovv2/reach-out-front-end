import {Typography} from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import decoratorImg from '../assets/reachOutGuy.png';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    homeContainer: {
    },
    background:{

    },
    decoratorImg:{
        position: 'relative',
        bottom: '-5px',
        width: '99%',
        height: 'auto',
        margin: '10% 0 0 -3%',

    },
    root: {
        padding: theme.spacing(1),
        color: 'magenta',
        [theme.breakpoints.down('sm')]: {
            backgroundColor: theme.palette.secondary.main,
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: theme.palette.primary.main,
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: '#f5f562',
        },
    },
    contactButton:{
        border: '2px solid #CC3533',
        padding: '10px 25px',
        fontWeight: 700,
        color: '#001a4c',
        fontSize: '1rem',
        margin: '10% 0 20% 0',
    },
    banner:{
        width: '80%',
        color: '#fafafa',
        backgroundColor: '#0C4D91',
        border: '1px solid #CC3533',
        borderRadius: '2px',
        boxShadow: '-3px 3px 5px #B32F2D',
        padding: '10px',
        fontFamily: 'futura-pt-condensed, sans-serif',
        fontWeight: 800,
        margin: '15% 0 25% 0',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around',

    },
    bannerButtonContainer:{
        display:  'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    homeHeading:{
        margin: '5% 0 10% 0',
    }
}));

const Home =  () => {
    const classes = useStyles();
    return(
        <div className={classes.homeContainer}>
            <Typography variant={'h1'} className={classes.homeHeading}>Laser Focus</Typography>
            <Grid container>
                <Grid item xs={10} md={6}>
                    <Typography variant={'body1'}>
                        We combine <strong>Executive-level inspiration</strong>, <strong>Execution-level teams</strong>, with <strong>scalable and reliable technologies</strong> that drive opportunity.
                    </Typography>
                    <Typography variant={'body1'}>
                        Whether you deliver products or communicate a personalized message, you have a technology partner with the same focus, and a serious passion for seeing our clients grow!
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.bannerButtonContainer}>
                    <div className={classes.banner}>
                        <span>Grow</span>
                        <span>Commerce</span>
                        <span>Communicate</span>
                    </div>

                    <Link to={'/contact_us'}>
                        <Button className={classes.contactButton} variant={'outlined'}>CONTACT US</Button>
                    </Link>
                </Grid>
                <Grid item xs={12} alignContent={'center'}>

                </Grid>
                <Grid item xs={12} md={6} >
                    <img src={decoratorImg} className={classes.decoratorImg}/>
                </Grid>
            </Grid>

        </div>
    )
}

export default Home;
