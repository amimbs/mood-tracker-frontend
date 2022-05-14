import React from "react";
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

class SignUp extends React.Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <h1>Sign-Up Page</h1>
                </Grid>
                <Grid item xs={8}>
                    <form>
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