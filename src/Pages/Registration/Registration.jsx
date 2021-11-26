import React, {useState} from 'react';
import {Box, Button, Container, Grid, TextField, Typography,Alert, CircularProgress} from "@mui/material";
import login from "../../images/login.png";
import {NavLink, useNavigate} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useNotification from "../../Hooks/useNotification";
const Registration = () => {
    const {newUserCreate, isLoading, user, notify} = useAuth();
    const {passWordError,userCreate} = useNotification();
    const navigate = useNavigate()
    const [registrationData, setRegistrationData] = useState({})
    const handleOnChange = e =>{
        const field = e.target.name
        const value = e.target.value
        const newRegistrationData = {...registrationData}
        newRegistrationData[field] = value
        setRegistrationData(newRegistrationData)
    }
    const registrationSubmitHandle = e =>{
        e.preventDefault()
        if(registrationData.password !== registrationData.confirmpassword){
            passWordError()
            return
        }
        const email = registrationData.email
        const password = registrationData.password
        const fullName = registrationData.fullName
        newUserCreate(email, password,fullName, userCreate, navigate)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Container>
                <Grid container spacing={2}>
                   <Grid item xs={12} md={4} sm={6}
                           sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                       {!isLoading && <div className="loginForm">
                            <Typography variant="h4" sx={{my: 5, textAlign: 'center'}}>
                                User Registration
                            </Typography>
                            <form onSubmit={registrationSubmitHandle}>
                                <TextField
                                    placeholder="Full Name"
                                    variant="standard"
                                    type="text"
                                    label="Full Name"
                                    name="fullName"
                                    required
                                    size="small"
                                    onBlur={handleOnChange}
                                    sx={{width: '100%'}}
                                />
                                <TextField
                                    placeholder="Email"
                                    variant="standard"
                                    type="email"
                                    label="Email"
                                    name="email"
                                    required
                                    size="small"
                                    onBlur={handleOnChange}
                                    sx={{width: '100%', my: 4}}
                                />
                                <TextField
                                    placeholder="PassWord"
                                    variant="standard"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnChange}
                                    required
                                    size="small"
                                    sx={{width: '100%'}}
                                />
                                <TextField
                                    placeholder="Confirm Password"
                                    variant="standard"
                                    label="Confirm Password"
                                    type="password"
                                    name="confirmpassword"
                                    onBlur={handleOnChange}
                                    required
                                    size="small"
                                    sx={{width: '100%', my: 4}}
                                />
                                <Button sx={{width: 1, mb: 4, py: 1}} type="submit" variant="contained">Registration
                                    Now</Button>
                                <NavLink to='/login'>Have an account? Login Now</NavLink>
                            </form>
                        </div>}
                       {isLoading && <CircularProgress />}
                    </Grid>
                    <Grid item xs={12} md={8} sm={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div className="loginImg">
                            <img style={{width: '100%'}} src={login}  alt=""/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Registration;