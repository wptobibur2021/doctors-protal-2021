import React, {useState} from 'react';
import {Grid, Typography} from "@mui/material";
import Calender from "../../Frontend/Calender/Calender";
import Appointments from "../Appointment/Appointments";
const DashboardHome = () => {
    const [date, setDate] = useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4} sm={4}>
                <Calender date={date} setDate={setDate}></Calender>
            </Grid>
            <Grid item xs={12} md={8} sm={8}>
                <Appointments date={date}></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;