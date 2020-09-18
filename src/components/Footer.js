import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import {Typography} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

import logo from '../assets/ReachOutLogo.png';
import linkedInLogo1 from '../assets/icons/linkedin.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        borderTop: '5px solid #0a3f78',
        backgroundColor: '#fafafa'
    },
    footerContent:{
        margin: '0 3% 0 3%',
        width: '100%'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    copyRight: {
        backgroundColor: theme.palette.primary.main,
        color: '#fafafa',
        padding: '0 3% 0 3%',
        minHeight: '100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: '30px'
    },
    socialContainer:{

    },
    logoFooterContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '20vh'
    },
    logoFooter:{
        maxHeight: '15vh',
        width: 'auto'
    },
    contactInfo: {
        color: theme.palette.primary.dark,
        alignSelf: 'flex-end',
        marginLeft: '10px'
    },
    footerInfo:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'baseline',
        justifyContent: 'flex-start',
        color: theme.palette.secondary.main,
        marginBottom: '6px'
    },
    socialIcon:{
        color: theme.palette.primary.main,
        width: '18px',
        height: 'auto',
        padding: '5px'
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Grid container spacing={3} className={classes.footerContent}>
                <Grid item xs={12} className={classes.logoFooterContainer}>
                    <img src={logo} className={classes.logoFooter}/>
                </Grid>
                <Grid item xs={8} >
                    <span className={classes.footerInfo}>
                        <PhoneIcon color={'secondary'} fontSize={'small'}/>
                        <Typography variant={'body2'} className={classes.contactInfo}>630-488-2588</Typography>
                    </span>
                    <span className={classes.footerInfo}>
                        <AlternateEmailIcon color={'secondary'} fontSize={'small'}/>
                        <Typography variant={'body2'} className={classes.contactInfo}>email@email.com</Typography>
                    </span>
                    <span className={classes.footerInfo}>
                        <LocationOnIcon color={'secondary'} fontSize={'small'}/>
                        <Typography variant={'body2'} className={classes.contactInfo}>PO Box 858 Plainfield, IL 60544</Typography>
                    </span>
                </Grid>
                <Grid item xs={4} className={classes.socialContainer}>
                    <Typography variant={'body2'}>Social</Typography>
                    <img src={linkedInLogo1} className={classes.socialIcon}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={'body2'} color={'primary'}>Legal Notice</Typography>
                </Grid>
            </Grid>
            <div className={classes.copyRight}>
                <p>© 2020 ReachOut Technology Holdings®, LLC</p>
            </div>
        </footer>
    );
}
