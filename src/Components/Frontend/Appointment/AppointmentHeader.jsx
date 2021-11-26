import React from 'react';
import {Container, Grid, Typography, Box} from "@mui/material";
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import Calender from "../Calender/Calender";
const headerBg = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}
const AppointmentHeader = ({date, setDate}) => {
    return (
        <div className='appointmentHeaderSection' style={headerBg}>
            <Container sx={{py: 20}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography variant="h4" sx={{mb:3, textAlign: 'center'}}>
                                Gen An Appointment
                            </Typography>
                        </Box>
                        <Box>
                            <Calender date={date} setDate={setDate}></Calender>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div className="appointmentHeaderImg">
                            <img src={chair} style={{width: '550px'}} alt=""/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentHeader;