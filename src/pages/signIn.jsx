import React from "react";
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

class SignIn extends React.Component {
    signIn = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;

        let body = {
            email: email,
            password: password
        };
        console.log(body)
        fetch('http://localhost:3001/signIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(data => {
            console.log(data);
            // should a check here to tell you it's successful; and take you the the dashboard
            // check if data.success is true
        });

    }

    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <h1>Login Page</h1>
                </Grid>
                <Grid item xs={8}>
                    <form onSubmit={this.signIn}>
                        <div>
                            <TextField
                                name="email"
                                id="email"
                                label="Email 🤮"
                                variant="outlined" />
                        </div>
                        <div>
                            <TextField
                                name="password"
                                id="password"
                                label="Password"
                                variant="outlined" />
                        </div>
                        <Button
                            type="submit"
                            variant="contained">Submit</Button>
                    </form>
                </Grid>
            </Grid>
        );
    };
}

export default SignIn;