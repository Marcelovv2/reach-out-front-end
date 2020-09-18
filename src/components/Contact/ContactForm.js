/**
 * Contact Form
 */
import React , {useState} from 'react';
import {Button, Grid, TextField} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { fade, makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    contactFormInput: {
        width: '80%',
    },
    form:{
        width: '98%',
        marginBottom: '10%',
    }
}));


function ContactForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [toggle, setToggle] = useState(true);
    const [success, setSuccess] = useState('none')
    const classes = useStyles();
    function handleEmail(value){
        if(validateEmail(value)){
            setEmail(value)
            setToggle(false)
        }
        else {
            setToggle(true)
        }
    }
    function handleName(value){
        setName(value)
    }
    function handleSubject(value){
        setSubject(value)
    }
    function handleMessage(value){
        setMessage(value)
    }
    function validateEmail(emailVal) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(emailVal).toLowerCase());
    }
    let successStyle = {
        'display': success
    }

    const resetForm = () =>{
        console.log('reset')
        handleEmail('')
        handleName('Something else')
        handleSubject('')
        handleMessage('')
    }
    function handleSuccess(value){
        setSuccess(value)
        window.location.reload();
    }
    async function postData(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: data
        });
        return await response;
    }
    function handleSubmit(){
        // let contactMessage = {
        //     email,
        //     name,
        //     subject,
        //     message
        // }
        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");
        // var raw = JSON.stringify(contactMessage);
        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };
        // console.log(contactMessage)
        // fetch(globalUrl + "/contact-us", requestOptions)
        //     .then(response => {
        //         if (response.ok){
        //             console.log('Success:', response);
        //             setSuccess(true)
        //         }
        //         response.text()})
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
    }
    return (
        <Grid container>
            <Grid item xs={12} md={12}>
                <h2 >Send Us Message</h2>
                <p>Please contact us with any of your questions, we will respond within a business day.</p>
            </Grid>
            <Grid item xs={12} md={12}>
                <form className={classes.form}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <TextField  className={classes.contactFormInput} variant="outlined" type="text" label="Name" onChange={e => handleName(e.target.value)} />
                        <TextField  className={classes.contactFormInput} variant="outlined" type="email" label="Email Address" onChange={e => handleEmail(e.target.value)}/>
                        <TextField  className={classes.contactFormInput} variant="outlined" type="text" label="Subject" onChange={e => handleSubject(e.target.value)}/>
                        <TextField
                            className={classes.contactFormInput}
                            variant="outlined"
                            id="ContactMessage"
                            label="Message"
                            multiline={true}
                            rows={4}
                            rowsMax={5}
                            value={message}
                            onChange={e => handleMessage(e.target.value)} />
                        <Button disabled={toggle} onClick={handleSubmit} variant={'outlined'}>Submit</Button>
                    </Grid>
                </form>
            </Grid>
            <div className="p-3 md-success my-2 rounded" style={successStyle}>
                <Button variant="outlined" type="button" className="close" aria-label="Close" onClick={e => handleSuccess('none')}>
                    <span aria-hidden="true">&times;</span>
                </Button>
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    This is a success alert — <strong>check it out!</strong>
                </Alert>
            </div>
        </Grid>
    )

}

export default ContactForm;
