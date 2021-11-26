import React from 'react';
import {Avatar, Box, Container, Typography, Grid, Paper, ListItemAvatar, ListItemText, ListItem} from "@mui/material";
import img1 from '../../../images/people-1.png'
import img2 from '../../../images/people-2.png'
import img3 from '../../../images/people-3.png'
const Testimonial = () => {
    return (
        <Box sx={{py: 10}}>
            <Container>
                <Box sx={{textAlign: 'center'}}>
                    <Typography variant="h6" sx={{color: '#037d7d'}}>
                        TESTIMONIAL
                    </Typography>
                    <Typography variant="h3">
                        What's Our Patients Says
                    </Typography>
                </Box>
                <Box sx={{mt: 8}}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={12} sm={4} md={4}>
                            <Paper elevation={3} sx={{p:4}}>
                                <Typography variant="p" sx={{lineHeight: 2, mb: 5}}>
                                    Aliquam ullamcorper mi id euismod dapibus. Ut eu volutpat mauris, vel sollicitudin nunc. Mauris sed hendrerit mauris. Phasellus mollis neque sit amet felis fringilla vestibulum.
                                </Typography>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={img1} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Bryan Joseph"
                                        secondary="Writer"
                                    />
                                </ListItem>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Paper elevation={3} sx={{p:4}}>
                                <Typography variant="p" sx={{lineHeight: 2, mb: 5}}>
                                    Aliquam ullamcorper mi id euismod dapibus. Ut eu volutpat mauris, vel sollicitudin nunc. Mauris sed hendrerit mauris. Phasellus mollis neque sit amet felis fringilla vestibulum.
                                </Typography>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={img2} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Dixie Carlson"
                                        secondary="Uniformed police officer"
                                    />
                                </ListItem>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Paper elevation={3} sx={{p:4}}>
                                <Typography variant="p" sx={{lineHeight: 2, mb: 5}}>
                                    Aliquam ullamcorper mi id euismod dapibus. Ut eu volutpat mauris, vel sollicitudin nunc. Mauris sed hendrerit mauris. Phasellus mollis neque sit amet felis fringilla vestibulum.
                                </Typography>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={img3} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Debi Stewart"
                                        secondary="Management Assistant"
                                    />
                                </ListItem>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Testimonial;