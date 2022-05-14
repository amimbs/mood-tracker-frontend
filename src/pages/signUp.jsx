import React from "react";
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

class SignUp extends React.Component {
    register = (e) => {
        e.preventDefault();
        let firstName = e.target.firstName.value;
        let lastName = e.target.lastName.value;
        let email = e.target.email.value;
        let password = e.target.password.value;

        let body = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        console.log(body)
        fetch('http://localhost:3001/signUp', {
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
                    <h1>Sign-Up Page</h1>
                </Grid>
                <Grid item xs={8}>
                    <form onSubmit={this.register}>
                        <div>
                            <TextField
                                name="firstName"
                                id="firstName"
                                label="firstName 🤮"
                                variant="outlined" />
                        </div>

                        <div>
                            <TextField
                                name="lastName"
                                id="lastName"
                                label="lastName 🤮"
                                variant="outlined" />
                        </div>

                        <div>
                            <TextField
                                name="email"
                                id="email"
                                label="email"
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
};

export default SignUp