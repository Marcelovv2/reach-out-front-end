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
        margin: '10% 0 0 -3%',

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

const ComplianceIndustries =  () => {
    const classes = useStyles();
    return(
        <div className={classes.aboutContainer}>
            <Typography variant={'h1'} >Compliance Industries</Typography>
            <Grid container>
                <Grid item xs={10} md={6}>
                    <Typography variant={'body1'}>
                        Financial, Pharmaceutical, Healthcare all share a common theme, they are complex.
                        So many rules to follow and absolutely no room for error when dealing with sensitive data.
                    </Typography>
                    <Typography variant={'body1'}>
                        All the touch points have their own set of challenges, so how do you manage your communications and supply chain with such complexities?
                    </Typography>
                    <Typography variant={'body1'}>
                        The answer is not just technology this time.  You need a partner with significant depth into how Marketing,
                        Compliance and Legal, and Operations all tie together.
                        With 20 years of experience architecting solutions for these very industries there’s no better fit!
                    </Typography>
                </Grid>
                <Grid item >
                    <HashLink smooth to="/"  alt={'3PL success story'}>Success Story</HashLink>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={decoratorImg} className={classes.decoratorImg}/>
                </Grid>
            </Grid>

        </div>
    )
}

export default ComplianceIndustries;
