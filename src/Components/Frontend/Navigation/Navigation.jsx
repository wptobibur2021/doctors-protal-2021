import React from 'react';
import {Box, AppBar, Toolbar, IconButton, Typography, Button,MenuItem} from '@mui/material'
import {Menu,AccountCircle} from '@mui/icons-material'
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useNotification from "../../../Hooks/useNotification";
const Navigation = () => {
    const {user,logOut} = useAuth()
    const navigate = useNavigate()
    const {userLogout} = useNotification()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className="navigationContainer">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Menu />
                        </IconButton>
                        <Link to="/"><Button color="inherit" sx={{color: '#fff'}}>Home</Button></Link>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Doctors Protal
                        </Typography>
                        <Link to="/appointment"><Button color="inherit" sx={{color: '#fff'}}>Appointment</Button></Link>
                        {
                            user?.email?
                                <Box>
                                    <Link to="/dashboard"><Button color="inherit" sx={{color: '#ffffff'}}>Dashboard</Button></Link>
                                    <Button onClick={()=>logOut(navigate,userLogout)} color="inherit" sx={{color: '#ffffff'}}>Logout</Button>
                                </Box>
                                :
                                <Link to="/login"><Button color="inherit" sx={{color: '#ffffff'}}>Login</Button></Link>
                        }

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;