import {Typography} from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import decoratorImg from '../../assets/GrowthHappyGuy.png';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ContactForm from "./ContactForm";
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
        padding: '5px 5px',
        fontWeight: 700,
        color: '#001a4c',
        fontSize: '1rem'
    },
}));

const ContactUs =  () => {
    const classes = useStyles();
    return(
        <div className={classes.aboutContainer}>
            <Typography variant={'h1'} >Contact Us</Typography>
            <Grid container>
                <Grid item xs={11} md={6}>
                    <ContactForm />
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={decoratorImg} className={classes.decoratorImg}/>
                </Grid>

            </Grid>
        </div>
    )
}

export default ContactUs;
