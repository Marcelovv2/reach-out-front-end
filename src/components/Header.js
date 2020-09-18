import React, {useEffect, useState, useRef} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import {Home } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BusinessIcon from '@material-ui/icons/Business';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Link, __RouterContext,} from 'react-router-dom';
import {Paper, Tooltip} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ContactMailIcon from '@material-ui/icons/ContactMail';
//
import navbarLogo from '../assets/navBarLogo.png';

const sections = [
    {
        title: 'Title 1',
        subtitle: 'Subtitle 1'
    },
    {
        title: 'Title 2',
        subtitle: 'Subtitle 2'
    },
    {
        title: 'Title 3',
        subtitle: 'Subtitle 3'
    }
];
const useStyles = makeStyles((theme) => ({
    navBarLogoContainer: {
        width: '51%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    navbarLogo:{
        maxHeight: '50px',
        width: 'auto',
        padding: '2.5px'
    }
}));

export default function Header(props) {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [drawerState, setDrawerState] = React.useState(false);
    const menuId = 'primary-search-account-menu';
    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerState(open );
    };
    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer( false)}
            onKeyDown={toggleDrawer( false)}
        >
            <List>
                <Link to={'/'}>
                    <ListItem button key={1}>
                        <ListItemIcon><Home/></ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>
                </Link>
                <Link to={'/about'}>
                    <ListItem button key={2}>
                        <ListItemIcon><InfoIcon/></ListItemIcon>
                        <ListItemText primary={"About us"} />
                    </ListItem>
                </Link>
                <Link to={'/industries'}>
                    <ListItem button key={3}>
                        <ListItemIcon><BusinessIcon/></ListItemIcon>
                        <ListItemText primary={"Industries"} />
                    </ListItem>
                </Link>
                <Link to={'/success_stories'}>
                    <ListItem button key={4}>
                        <ListItemIcon><ThumbUpIcon/></ListItemIcon>
                        <ListItemText primary={"Success Stories"} />
                    </ListItem>
                </Link>
                <Link to={'/contact_us'}>
                    <ListItem button key={4}>
                        <ListItemIcon><ContactMailIcon/></ListItemIcon>
                        <ListItemText primary={"Contact Us"} />
                    </ListItem>
                </Link>
            </List>
        </div>
    );

    useEffect(() => {

    }, []);
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.navBarLogoContainer}>
                        <Link to={'/'}>
                            <img src={navbarLogo} className={classes.navbarLogo}/>
                        </Link>
                    </div>
                    <div className={classes.sectionDesktop}>
                        <Tooltip title="About">
                            <Link to={'/about'}>
                                <IconButton aria-label="Go to about" color="inherit">
                                    <Badge badgeContent={null} color="secondary">
                                        <InfoIcon />
                                    </Badge>
                                </IconButton>
                            </Link>
                        </Tooltip>
                    </div>

                </Toolbar>
            </AppBar>
            <React.Fragment >
                <SwipeableDrawer
                    open={drawerState}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {list()}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}


