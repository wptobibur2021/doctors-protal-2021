import React, {useState} from 'react';
import {Typography, TextField, Box, Button} from "@mui/material";
import axios from "axios";
import useNotification from "../../../Hooks/useNotification";
import useAuth from "../../../Hooks/useAuth";
const MakeAdmin = () => {
    const [email, setEmail] = useState()
    const {userMakeAdmin} = useNotification()
    const{token} = useAuth()
    const onBlurEmail = e =>{
        setEmail(e.target.value)
    }
    const handleMakeAdmin = e =>{
        e.preventDefault()
        const user = {email}
        const url = 'http://localhost:8000/api/users/admin'
        axios.put(url, user, { headers: {"authorization" : `Bearer ${token}`} }).then(res=>{
            const result = res.data
            console.log(res)
            if(result.modifiedCount > 0){
                e.target.reset()
                userMakeAdmin()
            }else if(result.status === 401){
                console.log('hello')
            }
        })
    }
    return (
        <Box>
            <Typography variant="h6">
                You can Create An Admin From Here
            </Typography>
           <form onSubmit={handleMakeAdmin}>
               <TextField
                   id="standard-basic"
                   label="Email"
                   variant="standard"
                   type="email"
                   onBlur={onBlurEmail}
                   sx={{my:3}}

               />
               <br></br>
               <Button type="submit" variant="contained">Add Admin</Button>
           </form>
        </Box>
    );
};

export default MakeAdmin;
