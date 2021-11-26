import React from 'react';
import {Box, Container, Grid, Typography, Button, Card, CardMedia} from "@mui/material";
import careImg  from '../../../images/treatment.png'
const CareDental = () => {
    return (
        <Box sx={{py: 5}}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Card elevation={0}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={careImg}
                                alt="green iguana"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} sx={{pt: 5}}>
                        <Box>
                            <Typography variant="h2" sx={{mb: 5}}>
                                Exceptional Dental Care, On your Terms
                            </Typography>
                            <Typography variant="p" sx={{mb: 5, lineHeight: 2, alignItems: 'justify'}}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </Typography>
                            <Button variant="contained" sx={{mt: 5}}>Get An Appointment</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CareDental;