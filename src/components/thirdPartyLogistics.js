import {List, Typography} from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import decoratorImg from '../assets/GrowthHappyGuy.png';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { HashLink } from 'react-router-hash-link';



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
        margin: '20% 0 0 -3%',

    },
    list:{

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
}));

const ThirdPartyLogistics =  () => {
    const classes = useStyles();
    return(
        <div className={classes.aboutContainer}>
            <Typography variant={'h1'} >Third Party Logistics (3PL)</Typography>
            <Grid container>
                <Grid item xs={10} md={6}>
                    <Typography variant={'body1'}>
                        Awesome, you’re a 3PL provider with a Fulfillment Center!  Or maybe you are quickly becoming one so you can take on growing demands of your partners or customers.  You know need the best technology!                    </Typography>
                    <Typography variant={'body1'}>
                        We have over 25 years’ experience working with this industry and helping 3PLs just like you by:
                    </Typography>
                    <ul className={classes.list}>
                        <li>Implementing scalable and repeatable solutions to support rapid client onboardings.</li>
                        <li>Provide strategy, counsel, or aid in the implementation of mission critical business systems</li>
                        <li>Automate and standardize repetitive processes across all clients</li>
                    </ul>
                </Grid>
                <Grid item >
                    <HashLink smooth to="/success_stories"  alt={'3PL success story'}>Success Story</HashLink>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={decoratorImg} className={classes.decoratorImg}/>
                </Grid>
            </Grid>

        </div>
    )
}

export default ThirdPartyLogistics;



