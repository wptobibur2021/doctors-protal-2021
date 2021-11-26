import React, {useState} from 'react';
import login from '../../images/login.png'
import {Box, Grid,Divider, Container, TextField, Button, Typography, CircularProgress} from '@mui/material'
import {NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useNotification from "../../Hooks/useNotification";
const Login = () => {
    const {passWordError,userLogin} = useNotification();
    const [loginData, setLoginData] = useState({})
    const {loginUser, isLoading, sineInWithGoogle} = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const handleOnChange = e =>{
        const field = e.target.name
        const value = e.target.value
        const newLoginData = {...loginData}
        newLoginData[field] = value
        setLoginData(newLoginData)
    }
    const loginSubmitHandle = e =>{
        e.preventDefault()
        const email = loginData.email
        const password = loginData.password
        loginUser(email, password, location, navigate, userLogin)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} sm={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        {!isLoading && <div className="loginForm">
                            <Typography variant="h4" sx={{my: 5, textAlign: 'center'}}>
                                User Login
                            </Typography>
                            <form onSubmit={loginSubmitHandle}>
                                <TextField
                                    placeholder="Email"
                                    variant="standard"
                                    type="email"
                                    label="Email"
                                    name="email"
                                    required
                                    size="small"
                                    onBlur={handleOnChange}
                                    sx={{width: '100%'}}
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
                                    sx={{width: '100%', my: 4}}
                                />
                                <Button sx={{width: 1, mb: 5, py: 1}} type="submit" variant="contained">Login
                                    Now</Button>
                                <NavLink to='/registration'>Don't have an account? Registration Now</NavLink>
                            </form>
                            <Divider sx={{width: 1, my:4}} />
                            <Button sx={{width: 1, mb: 5, py: 1}} onClick={()=>sineInWithGoogle(location, navigate, userLogin)} variant="contained">Google Login</Button>
                        </div>}
                        {isLoading && <CircularProgress/>}
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

export default Login;