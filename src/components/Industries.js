import {Typography} from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import decoratorImg from '../assets/BlackWomenCallingOutIndustries.png';

import eCommerce from "../assets/icons/001-online-shopping.svg";
import printing from "../assets/icons/003-layers.svg";
import creativeAgencies from "../assets/icons/004-branding.svg";
import thirdPartyLogistics from "../assets/icons/005-box.svg";
import complianceIndustries from "../assets/icons/compliance.svg";
import { Link, __RouterContext,} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    industriesContainer: {
    },
    decoratorImg:{
        position: 'relative',
        bottom: '-5px',
        width: '99%',
        height: 'auto',
        margin: '10% 0 0 -3%',
        right: '-4%'
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
    iconsContainer: {
        marginTop: '10%',
        marginBottom: '10%',
      display: 'flex',
      flexDirection: 'row',
        flexWrap: 'wrap',

    },
    industryHolder: {
      width: '50%',
      height: '18vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'center',
      marginBottom: '10%',


    },
    industryName:{
        color: '#cc3533',
        lineHeight: '1.25rem',
        textShadow: '1px 0.25px #bdaeaea6',
    },
    icon:{
        height: '10vh',
        width: 'auto',
    }
}));

let industriesWeServe = [
    {
        name: 'Ecommerce',
        icon: eCommerce
    },
    {
        name: 'Commercial Printers',
        icon: printing
    },    {
        name: 'Creative Agencies',
        icon: creativeAgencies
    },    {
        name: 'Third-Party Logistics',
        icon: thirdPartyLogistics
    },    {
        name: 'Compliance Industries',
        icon: complianceIndustries
    },
]
const Industries =  () => {
    const classes = useStyles();
    return(
        <div className={classes.industriesContainer}>
            <Typography variant={'h1'} className={classes.heading}>Industries We Serve</Typography>
            <Grid container>
                <Grid item xs={12} >
                    <div className={classes.iconsContainer}>
                        {industriesWeServe.map((industry, index) => {
                            return(
                                <div className={classes.industryHolder}>
                                    <Link to={industry.name} style={{ textDecoration: 'none' }}>
                                        <Typography variant={'h6'} className={classes.industryName}>
                                            {industry.name}
                                        </Typography>
                                    </Link>
                                    <img src={industry.icon} className={classes.icon}/>
                                </div>
                                )
                            })}
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={decoratorImg} className={classes.decoratorImg}/>
                </Grid>
            </Grid>

        </div>
    )
}

export default Industries;
