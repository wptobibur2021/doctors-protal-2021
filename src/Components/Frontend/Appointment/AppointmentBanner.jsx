import React from 'react';
import {Box, Grid, Typography, Button, Container, Card, CardMedia} from '@mui/material'
import Animate from 'react-animate.css';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import {Link} from "react-router-dom";
const appointmentBannerStyle = {
    background: `url(${bg})`,
    backgroundColor: 'rgb(0 0 0 / 85%)',
    backgroundBlendMode: 'color-burn',
    marginTop: '150px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}
const AppointmentBanner = () => {
    return (
        <div className="appointmentBannerContainer" style={appointmentBannerStyle}>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} direction="up">
                            <Animate enter="bounceIn"
                                     leave="bounceOut"
                                     appear="fadeInRight"
                                     change="flipInX"
                                     durationAppear={1000}
                                     durationEnter={1000}
                                     durationLeave={1000}
                                     durationChange={1000}>
                                <div className="doctorImg" style={{marginTop: '-150px'}}>
                                    <Card sx={{background: "transparent"}} elevation={0}>
                                        <CardMedia
                                            component="img"
                                            height="auto"
                                            image={doctor}
                                            alt="green iguana"
                                        />
                                    </Card>
                                </div>
                            </Animate>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div className="appointmentText">
                                <Typography variant="h6" sx={{ color: '#E7E4ED', mb: 5 }} >
                                    APPOINTMENT
                                </Typography>
                                <Typography variant="h2"  sx={{ color: '#fff' }}>
                                    Make an appointment Today
                                </Typography>
                                <Typography variant="h6"  sx={{ color: '#fff', my: 5, fontSize: 16 }}>
                                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet, making this the first true generator.
                                </Typography>
                                <Link to='/appointment'><Button variant="contained">Get Appointment</Button></Link>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default AppointmentBanner;