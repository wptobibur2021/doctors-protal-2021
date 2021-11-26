import React from 'react';
import {Button, Container, Grid, Typography, Card, CardMedia} from "@mui/material";
import chair from '../../../images/chair.png';
import bannerBg from '../../../images/bg.png'
const bannerStyleBg = {
    backgroundSize: 'cover',
    backgroundImage: `url(${bannerBg})`,
}
const Banner = () => {
    return (
        <div className="bannerSectionContainer" style={bannerStyleBg} >
            <Container sx={{py:20, display: 'flex', alignItems: 'center' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant="h3" sx={{fontWeight: 'bold'}}>
                            Your New Smile <br></br>
                            Start Here
                        </Typography>
                        <Typography variant="h6" sx={{fontSize: 14, my: 5}}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>
                        <Button variant="contained">Get Appointment</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Card elevation={0}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={chair}
                                alt="green iguana"
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;