import React, {useState} from 'react';
import {Modal,Box, Typography, TextField, Button} from "@mui/material";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import useNotification from "../../../Hooks/useNotification";
import {useNavigate}  from 'react-router-dom'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({open, handleClose, booking, date}) => {
    const {userBookAppointment} = useNotification()
    const navigate = useNavigate()
    const {name, time, price} = booking;
    const {user, token} = useAuth()
    const initInfo = {patientName: user.displayName, email: user.email, mobile: ''}
    const [appointment, setAppointment] = useState(initInfo)
    const handleChange = e =>{
        const field = e.target.name
        const value = e.target.value
        const newInfo = {...appointment}
        newInfo[field] = value
        console.log('New Info: ', newInfo)
        setAppointment(newInfo)
    }
    const bookHandle = e =>{
        e.preventDefault()
        // Collect Data
        const appointmentBook = {
            ...appointment,
            serviceName: name,
            price,
            time,
            date: date.toLocaleDateString()
        }
        // Send Data Backend Server
        axios.post('http://localhost:8000/api/book-appointment', appointmentBook, { headers: {"authorization" : `Bearer ${token}`} }).then(res=>{
            const result = res.data
            if(result.insertedId){
                handleClose()
                userBookAppointment()
                navigate('/')
            }else{
                console.log('Book Appointment Problem')
            }
        })
    }
    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <form onSubmit={bookHandle}>
                    <TextField
                        disabled
                        defaultValue={time}
                        id="outlined-size-small"
                        type="text"
                        size="small"
                        sx={{width: '100%', mb:2}}
                    />
                    <TextField
                        defaultValue={user.displayName}
                        type="text"
                        name="patientName"
                        onBlur={handleChange}
                        required
                        size="small"
                        sx={{width: '100%', mb:2}}
                    />
                    <TextField
                        defaultValue={user.email}
                        type="email"
                        name="email"
                        onBlur={handleChange}
                        required
                        size="small"
                        sx={{width: '100%', mb:2}}
                    />
                    <TextField
                        defaultValue="Mobile No"
                        type="number"
                        name="mobile"
                        onBlur={handleChange}
                        required
                        size="small"
                        sx={{width: '100%', mb:2}}
                    />
                    <TextField
                        disabled
                        value={date.toDateString()}
                        size="small"
                        sx={{width: '100%', mb:2}}
                    />
                    <Button type="submit" variant="contained">Book Now</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;