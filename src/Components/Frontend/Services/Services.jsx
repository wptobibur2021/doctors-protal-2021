import React from 'react';
import {Container, Box, Grid, Typography} from "@mui/material";
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Single from "./Single";
const Services = () => {
    const services = [
        {
            name: "Fluoride Treatment",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            img: fluoride
        },
        {
            name: "Cavity Treatment",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            img: cavity
        },
        {
            name: "Fluoride Treatment",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            img: whitening
        },
    ]
    return (
        <div className="servicesSection">
            <Container sx={{textAlign: 'center', py: 6}}>
                <Typography variant="h6" sx={{letterSpacing: 6, mb:2}}>
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" sx={{letterSpacing: 6, mb:5}}>
                    We are Services Provide
                </Typography>
                <Box sx={{ flexGrow: 1 }} style={{ textAlign: 'center'}}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map((s, i)=> <Single key={i} service={s}></Single> )
                        }
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Services;