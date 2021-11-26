import React from 'react';
import useAuth from "../Hooks/useAuth";
import {useLocation, Navigate} from "react-router-dom";
import {CircularProgress,Box} from "@mui/material";

const AdminRoute = ({children, ...rest}) => {
    const {user, isLoading, admin} = useAuth()
    let location = useLocation();
    if(isLoading){
        return (
            <Box  sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', py: 40}}>
                <CircularProgress/>
            </Box>
        )
    }
    if(user?.email && admin ){
        return children;
    }else {
        return <Navigate to="/login" state={{ from: location }} />;
    }

};

export default AdminRoute;