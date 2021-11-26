import React from 'react';
import {Box, Container, Grid, ListItem, ListItemText, List, Typography, ListItemIcon} from "@mui/material";
import {Room,Email,Phone} from "@mui/icons-material"
import footerImg from '../../../images/footer-bg.png'
const bannerStyleBg = {
    backgroundSize: 'cover',
    backgroundImage: `url(${footerImg})`,
}
const Footer = () => {
    return (
        <Box sx={{py: 5}} style={bannerStyleBg}>
            <Container>
                <Box sx={{color: '#037d7d'}}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography variant="h6" sx={{mb: 3, color: '#13D0CF', fontWeight: 600}}>
                                About Us
                            </Typography>
                            <Typography variant="p">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                            </Typography>
                            <List>
                                <ListItem  sx={{alignItems: 'center', m: 0, pl:0}}>
                                    <ListItemIcon sx={{minWidth: '40px'}}>
                                        <Room sx={{color: '#037d7d'}} />
                                    </ListItemIcon>
                                    <ListItemText primary="494 Murry Street" />
                                </ListItem>
                                <ListItem  sx={{alignItems: 'center', m: 0, pl:0}}>
                                    <ListItemIcon sx={{minWidth: '40px'}}>
                                        <Email sx={{color: '#037d7d'}} />
                                    </ListItemIcon>
                                    <ListItemText primary="info@example.com" />
                                </ListItem>
                                <ListItem  sx={{alignItems: 'center', m: 0, pl:0}}>
                                    <ListItemIcon sx={{minWidth: '40px'}}>
                                        <Phone sx={{color: '#037d7d'}} />
                                    </ListItemIcon>
                                    <ListItemText primary="773-394-4546" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography variant="h6" sx={{color: "#13D0CF", fontWeight: 600}}>
                                Our Services
                            </Typography>
                            <List>
                                <ListItem  sx={{flexDirection: 'column', alignItems: 'flex-start', m: 0, pl:0}}>
                                    <ListItemText primary="Single-line item"/>
                                    <ListItemText primary="Single-line item"/>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography variant="h6" sx={{color: "#13D0CF", fontWeight: 600}}>
                                Our Services
                            </Typography>
                            <List>
                                <ListItem  sx={{flexDirection: 'column', alignItems: 'flex-start', m: 0, pl:0}}>
                                    <ListItemText primary="Single-line item"/>
                                    <ListItemText primary="Single-line item"/>
                                    <ListItemText primary="Single-line item"/>
                                    <ListItemText primary="Single-line item"/>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography variant="h6" sx={{color: "#13D0CF", fontWeight: 600}}>
                                Our Services
                            </Typography>
                            <List>
                                <ListItem  sx={{flexDirection: 'column', alignItems: 'flex-start', m: 0, pl:0}}>
                                    <ListItemText primary="Single-line item"/>
                                    <ListItemText primary="Single-line item"/>
                                    <ListItemText primary="Single-line item"/>
                                    <ListItemText primary="Single-line item"/>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 2, color: '#037d7d'}}>
                    <Typography variant="p">
                        Copyright 2021 All Rights Reserved
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;