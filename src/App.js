import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";import './App.css';
import {ThemeProvider, createMuiTheme, responsiveFontSizes, makeStyles} from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import Industries from './components/Industries';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import SuccessStories from "./components/SuccessStories";
import ThirdPartyLogistics from "./components/thirdPartyLogistics";
import ComplianceIndustries from "./components/ComplianceIndustries";
import ContactUs from "./components/Contact/ContactUs";
import CreativeAgencies from "./components/CreativeAgencies";
import CommercialPrinters from "./components/CommercialPrinters";


let mediumImportanceHeadings = {
  fontFamily: 'futura-pt",sans-serif',
  fontWeight: 600,
  fontStyle: 'normal'
}
let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4869a7',
      main: '#0a3f78',
      dark: '#001a4c',
      contrastText: '#fafafa',
      lightContrastText: '#fff',
    },
    secondary: {
      light: '#ff695d',
      main: '#cc3533',
      dark: '#94000c',
      contrastText: '#fff',
    },
  },
  typography: {
    h1:{
      fontFamily: 'futura-pt-condensed, sans-serif',
      fontWeight: 800,
      color: '#cc3533',
      // padding: '5px 0px 5px 0px',
      fontStyle: 'italic',
      textAlign: 'center',
      textShadow: '1px 4px #8c86864a',
      width: '98%',
      margin: '5% 0 10% 0',

    },
    h2: mediumImportanceHeadings,
    h3: mediumImportanceHeadings,
    h4: mediumImportanceHeadings,
    h5: mediumImportanceHeadings,
    h6: mediumImportanceHeadings,
    subtitle1:{
      fontFamily: 'futura-pt, sans-serif',
      fontWeight: 500,
      fontStyle: 'normal',
    },
    subtitle2:{
      fontFamily: 'futura-pt, sans-serif',
      fontWeight: 500,
      fontStyle: 'normal',
    },
    p:{
      fontFamily: 'futura-pt',
      fontWeight: 400,
      fontStyle: 'normal',

    },
    body1:{
      fontFamily: 'futura-pt',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '1.35rem',
      marginBottom: '2.5%',
      color: '#072B52'
    },
    button:{
      fontFamily: 'futura-pt',
      fontWeight: 500,
      fontStyle: 'normal',
      textTransform: "upperCase",
    },
    caption:{
      fontFamily: 'futura-pt',
      fontWeight: 700,
      fontStyle: 'italic',
    },
    fontFamily: [
      'futura-pt',
      'futura-pt-condensed,sans-serif'

    ].join(','),
  },
});
theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: '0 3% 0 3%',
    width: '100%'
  },
}))


function App() {
  const classes = useStyles();
  return (
      <ThemeProvider theme={theme}>
        <Router>
            <Header />
              <div className={classes.contentContainer}>
                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch className={classes.contentContainer}>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/about">
                    <About />
                  </Route>
                  <Route exact path="/industries"  component={Industries} />
                  <Route exact path="/success_Stories"  component={SuccessStories} />
                  <Route exact path="/Third-Party Logistics"  component={ThirdPartyLogistics} />
                  <Route exact path="/Compliance Industries"  component={ComplianceIndustries} />
                  <Route exact path="/Contact_Us" component={ContactUs} />
                  <Route exact path="/Creative Agencies" component={CreativeAgencies} />
                  <Route exact path="/Commercial Printers" component={CommercialPrinters} />
                </Switch>
              </div>
            <Footer />
        </Router>
      </ThemeProvider>
  );
}

export default App;
