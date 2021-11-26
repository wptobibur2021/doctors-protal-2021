import React from 'react';
import {Grid,Typography,Paper,Button} from "@mui/material";
import BookingModal from "../Appointment/BookingModal";

const Booking = ({booking, date}) => {
    const {name, time, space, price} = booking
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4} sx={{mb:5}}>
                <Paper elevation={3} sx={{py: 4}}>
                    <Typography variant="h5">
                        {name}
                    </Typography>
                    <Typography sx={{ my: 1 }} color="text.secondary">
                        {time}
                    </Typography>
                    <Typography sx={{ my: 1 }} color="text.secondary">
                        Price: ${price}
                    </Typography>
                    <Typography sx={{ mb: 1 }} color="text.secondary">
                        {space} SPACE AVAILABLE
                    </Typography>
                    <Button onClick={handleOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal date={date} open={open} handleClose={handleClose} booking={booking}></BookingModal>
        </>

    );
};

export default Booking;