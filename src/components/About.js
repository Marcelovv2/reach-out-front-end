import {Typography} from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import decoratorImg from '../assets/GrowthHappyGuy.png';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";



const useStyles = makeStyles((theme) => ({
    aboutContainer: {
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
        padding: '5px 10px',
        fontWeight: 700,
        color: '#001a4c',
        fontSize: '1rem',
        margin: '25% 0 25% 0',
    },
    buttonContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '25% 0 25% 0',

    },

}));

const About =  () => {
    const classes = useStyles();
    return(
        <div className={classes.aboutContainer}>
            <Typography variant={'h1'} >About</Typography>
            <Grid container>
                <Grid item xs={10} md={6}>
                    <Typography variant={'body1'}>
                        Founded on the understanding that technology investments are both necessary and downright scary to anyone who owns the technology budget.  You need the right fit to get to your customers, complete the sale, and service them for life and you know you need great technology solutions to make it happen.
                    </Typography>
                    <Typography variant={'body1'}>
                        You know you need a partner that is going to deliver, help guide you as you grow, and help make sure you can afford it every step of the way.
                    </Typography>
                    <Typography variant={'body1'}>
                        ReachOut, let’s get your technology growing…
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} alignContent={'center'} className={classes.buttonContainer}>
                    <Link to={'/contact_us'}>
                        <Button className={classes.contactButton} variant={'outlined'}>CONTACT US</Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={decoratorImg} className={classes.decoratorImg}/>
                </Grid>
            </Grid>

        </div>
    )
}

export default About;
