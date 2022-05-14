import React from "react";
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

class SignIn extends React.Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <h1>Login Page</h1>
                </Grid>
                <Grid item xs={8}>
                    <form>
                        <div>
                            <TextField
                                name="username"
                                id="username"
                                label="Username 🤮"
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