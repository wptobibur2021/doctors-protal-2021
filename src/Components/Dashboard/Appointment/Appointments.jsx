import React, {useEffect, useState} from 'react';
import {Typography, TableContainer, Button,Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import {Link} from "react-router-dom"
import {Payment} from "@mui/icons-material";

const Appointments = ({date}) => {
    const {user} = useAuth()
    const [appointments, setAppointments] =  useState([])
    const url = `http://localhost:8000/api/user/appointments?email=${user.email}&date=${date}`;
    useEffect(()=>{
        axios.get(url).then(res=>{
            setAppointments(res.data)
        })
    }, [date])



    return (
        <div>
            <Typography variant="h4">
                Your Appointment
            </Typography>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient Name</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Pay</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments?.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">
                                    {
                                        row.payment ? 'Paid' :
                                            <Link to={`/dashboard/payment/${row._id}`}><Button variant="contained"><Payment/></Button></Link>
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;