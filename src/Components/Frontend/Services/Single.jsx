import React from 'react';
import {Grid,Card,CardContent,Typography,CardActions,Button,CardMedia } from "@mui/material";

const Single = ({service}) => {
    const {name, img, desc} = service
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card variant="outlined" sx={{ boxShadow: 0, border: 0 }}>
                <CardMedia
                    component="img"
                    style={{width: 'auto', height:'80px', margin: '0 auto'}}
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <Typography variant='h5' gutterBottom>
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {desc}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Single;