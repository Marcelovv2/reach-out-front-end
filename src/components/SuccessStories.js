import {Typography} from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import decoratorImg from '../assets/GrowthHappyGuy.png';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';



const useStyles = makeStyles((theme) => ({
    successStoriesContainer: {
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
    tittle:{
        textDecoration: 'underline',
        color: theme.palette.primary.dark,
        fontWeight: 700,
        lineHeight: 1.1,
        margin: '5% 0px 5% 0%',
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

const SuccessStories =  () => {
    const classes = useStyles();
    return(
        <div className={classes.successStoriesContainer}>
            <Typography variant={'h1'} id={"3plSuccessStory"}>Success Stories</Typography>
            <Grid container>
                <Grid item xs={10} md={6}>
                    <Typography variant={'h5'} className={classes.tittle}>
                        Print and Fulfillment MIS System Selection and Implementation
                    </Typography>
                    <Typography variant={'body1'}>
                        We were grateful to be awarded the opportunity to lead a major commercial printer through their next phase of technology evolution.
                        Our mission was to choose a system with an open architecture that could support the vast array of services offered and integration touch points, but also had the backbone to be scalable well into the future.
                    </Typography>
                    <Typography variant={'body1'}>
                        A complex fulfillment component, numerous integrations, and simultaneously dealing with legacy systems put moving into a brand new MIS into the highly daunting category.
                        We didn’t make it simple, because these are never simple; what we did was handle all of the <strong>Heavy lifting</strong>.
                    </Typography>
                    <Typography variant={'body1'}>
                        Everyone has their day jobs to do, so trying to pull together everything the vendor needs completed to keep the project dates on track usually means a lot of sleepless nights, for a lot of people.  Not this time
                    </Typography>
                    <Typography variant={'body1'}>
                        Our dedication ensured that there was always a single point of contact, and always someone inside the business working on the deliverables.
                        ReachOut stood up all the integrations and took an active role in system configuration alongside the internal team.
                        Just another example of combining our expertise to reduce the load to make sure projects complete on time, and within budget!
                    </Typography>
                    <Typography variant={'body1'}>
                        Just another example of combining our expertise to reduce the load to make sure projects complete on time, and within budget!
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={decoratorImg} className={classes.decoratorImg}/>
                </Grid>
            </Grid>
            <Grid container >
                <Grid item xs={10} md={6}>
                    <Typography variant={'h5'} className={classes.tittle} id="channelEcosystem">
                        Development of Full Partner Channel Ecosystem
                    </Typography>
                    <Typography variant={'body1'}>
                        A food and beverage manufacturer needed to bring on all of their
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={decoratorImg} className={classes.decoratorImg}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default SuccessStories;
