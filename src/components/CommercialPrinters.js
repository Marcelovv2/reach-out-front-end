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

const CommercialPrinters =  () => {
    const classes = useStyles();
    return(
        <div className={classes.aboutContainer}>
            <Typography variant={'h1'} >Commercial Printers</Typography>
            <Grid container>
                <Grid item xs={10} md={6}>
                    <Typography variant={'body1'}>
                        With over twenty years experience developing and implementing scalable solutions for the Commercial Print and Fulfillment industries, we are well equipped to provide you a wide range of services to help you grow your business.   Why invest in a CTO, Project Managers, Business Analysts, Developers, and all the infrastructure costs to do-it-yourself?                    </Typography>
                    <Typography variant={'body1'}>
                        We also believe print will never die.  But like anything the Digital Age has brought about rapid change in the technology and the hardware like
                    </Typography>
                    <Typography variant={'body1'}>
                        Beyond delivering quality solutions, we will bring what no other technology provider will bring you in this space, and that is strategy.
                    </Typography>
                    <Typography variant={'body1'}>
                        Our team will marry up with your strategists to expose opportunities, identify markets you can reach, and put together a road map where sales, marketing, and technology deliver results.  Like new clients, and new opportunities!
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

export default CommercialPrinters;



