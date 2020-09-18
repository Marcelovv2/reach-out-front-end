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

const CreativeAgencies =  () => {
    const classes = useStyles();
    return(
        <div className={classes.aboutContainer}>
            <Typography variant={'h1'} >Creative Agencies</Typography>
            <Grid container>
                <Grid item xs={10} md={6}>
                    <Typography variant={'body1'}>
                        You are the creative genius behind the brand.   Excellent, we are going to make a great team!  We work with Creative Agencies and help execute the brand, the message, and the products.
                    </Typography>
                    <Typography variant={'body1'}>
                        We have the skills and the manpower to help you bring powerful solutions to your clients and have the power of being vendor agnostic with the execution, and a much more flexible technology partnership.  We can help augment your team by providing:
                    </Typography>
                    <ul className={classes.list}>
                        <li>Personalized communications technology (VDP and omni-channel automation).</li>
                        <li>Automated data processing and ETL processes.</li>
                        <li>Integrations with CRMs, ERPs, Content Management.</li>
                    </ul>
                    <Typography variant={'body1'}>
                        Why get stuck with one single provider to handle the execution simply because it is complex?  Let us show you a path to servicing your clients and leverage your purchasing power by making the output nothing more than a commodity.
                    </Typography>
                </Grid>
                <Grid item >
                    <HashLink smooth to="/success_stories"  alt={'Marketing Agency success story'}>Success Story</HashLink>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={decoratorImg} className={classes.decoratorImg}/>
                </Grid>
            </Grid>

        </div>
    )
}

export default CreativeAgencies;



