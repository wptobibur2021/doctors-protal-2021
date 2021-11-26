import React from 'react';
import useAuth from "../Hooks/useAuth";
import { Route,Navigate,useLocation } from "react-router-dom";
import {CircularProgress,Box} from "@mui/material";

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth()
    let location = useLocation();
    if(isLoading){
        return (
            <Box  sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', py: 40}}>
                <CircularProgress/>
            </Box>
        )
    }
    if(user.email){
        return children;
    }else {
        return <Navigate to="/login" state={{ from: location }} />;
    }
};

export default PrivateRoute;