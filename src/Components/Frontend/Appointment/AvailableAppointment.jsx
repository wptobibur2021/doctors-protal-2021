import React from 'react';
import {Typography, Container, Box, Grid} from '@mui/material'
import Booking from "../Booking/Booking";
const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 20,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 20,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 20,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price: 20,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price: 20,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price: 20,
        space: 10,
    },
]

const AvailableAppointment = ({date}) => {
    return (
        <div className="AvailableAppointmentContainer">
            <Container sx={{py: 10, textAlign: 'center'}}>
                <Box>
                    <Typography variant="h5" sx={{color: '#7d7d7d', fontWeight: 600, mb: 5}}>
                        Available Appointment on {date.toDateString()}
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        {
                            bookings.map((b)=> <Booking date={date} booking={b} key={b.id}></Booking>)
                        }
                    </Grid>
                </Box>
            </Container>

        </div>
    );
};

export default AvailableAppointment;