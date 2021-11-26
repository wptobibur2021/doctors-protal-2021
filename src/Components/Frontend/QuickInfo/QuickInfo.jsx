import React from 'react';
import {Box, Container, Grid, Typography, ListItem,ListItemAvatar,Avatar, ListItemText } from '@mui/material'
import {AccessTime,Room, Phone} from '@mui/icons-material';
const QuickInfo = () => {
    return (
        <Box sx={{mt: -10}}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Box sx={{backgroundColor: '#15D1C2', p: 2, display: 'flex', justifyContent: 'center', color: '#fff' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <AccessTime sx={{fontSize: 60, mr: 3, color: '#fff'}}/>
                                </ListItemAvatar>
                                <ListItemText primary="Opening Hours" secondary="24/7" />
                            </ListItem>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Box sx={{backgroundColor: '#13D0CF', p: 2, display: 'flex', justifyContent: 'center', color: '#fff' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Room sx={{fontSize: 60, mr: 3, color: '#fff'}}/>
                                </ListItemAvatar>
                                <ListItemText primary="Visit Our Locations" secondary="494 Murry Street" />
                            </ListItem>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Box sx={{backgroundColor: '#12D0D4', p: 2, display: 'flex', justifyContent: 'center', color: '#fff' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Phone sx={{fontSize: 60, mr: 3, color: '#fff'}}/>
                                </ListItemAvatar>
                                <ListItemText primary="Hotline" sx={{color: '#fff'}} secondary="+8801722-527364" />
                            </ListItem>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default QuickInfo;