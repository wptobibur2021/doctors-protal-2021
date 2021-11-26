import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";
import {Button, Grid, Paper, Typography, Box} from "@mui/material";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe('pk_test_51JyJq6AQ044GxvRG2UF0G2FTwW1ZNr6N7FUqnXl6gRO73rEJ1J25Bb8uaHgBtEw4deV3HFNSFAC0eztcwhVcY8I400xMgTxky5');
const Payment = () => {
    const {appointmentID} = useParams()
    const [appointment, setAppointment]=useState({})
    useEffect(()=>{
        const url=`http://localhost:8000/api/appointment/${appointmentID}`
        axios.get(url).then(res=>{
            setAppointment(res.data)
        })
    },[])
    return (
        <Box sx={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
            <Grid item xs={12} sm={6} md={6} sx={{mb:5, textAlign: 'center'}}>
                <Paper elevation={3} sx={{py: 4}}>
                    <Typography variant="h5">
                        {appointment.serviceName}
                    </Typography>
                    <Typography sx={{ my: 1 }} color="text.secondary">
                        {appointment.time}
                    </Typography>
                    <Typography sx={{ my: 1 }} color="text.secondary">
                        Price: ${appointment.price}
                    </Typography>
                    <Typography sx={{ mb: 3 }} color="text.secondary">
                        {appointment.space} SPACE AVAILABLE
                    </Typography>
                    {appointment?.price && <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} id={appointmentID}/>
                    </Elements>}
                </Paper>
            </Grid>
        </Box>
    );
};

export default Payment;