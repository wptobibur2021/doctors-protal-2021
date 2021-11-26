import React from 'react';
import {Box, CardMedia, Grid, Paper, Typography} from "@mui/material";
import {Phone} from "@mui/icons-material";

const Doctor = ({doctor}) => {
    const {name, mobile, image} = doctor
    return (
        <Grid item xs={12} sm={6} md={3} sx={{mb:5}}>
            <Paper elevation={3} sx={{p: 2}}>
                <CardMedia
                    component="img"
                    height="auto"
                    image={`data:image/jpeg;base64,${image}`}
                    alt={name}
                />
                <Box sx={{alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <Typography variant="p" sx={{my: 2}}>
                        {name}
                    </Typography>
                    <Typography variant="p" sx={{display: 'flex', alignItems: 'center'}}>
                        <Phone sx={{mr: 1}}/> <span>{mobile}</span>
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    );
};

export default Doctor;