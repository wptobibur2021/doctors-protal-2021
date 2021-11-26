import React, {useEffect, useState} from 'react';
import {Box, Container, Grid, Paper, CardMedia, CircularProgress, Typography} from "@mui/material";
import {Phone} from '@mui/icons-material';
import axios from "axios";
import Doctor from "./Doctor";
const Doctors = () => {
    const [doctors, setDoctors] = useState()
    useEffect(()=>{
        const url = 'http://localhost:8000/api/all-doctors'
        axios.get(url).then(res=>{
            setDoctors(res.data)
        })
    },[])

    if(doctors){
        return (
                <Box sx={{py:10}}>
                        <Container sx={{ flexGrow: 1 }}>
                            <Box>
                                <Typography variant="h4" sx={{mb: 4, textAlign: 'center', color: '#037d7d'}}>
                                    Our Special Doctor's
                                </Typography>
                            </Box>
                            <Grid container spacing={{ xs: 2, md: 3 }}>
                                {doctors?.map((d)=><Doctor key={d._id} doctor={d}></Doctor>)}
                            </Grid>
                        </Container>
                </Box>
        );
    }else{
        return (
            <Box sx={{alignItems: 'center', display: 'flex', justifyContent: 'center', py: 5}}>
                <CircularProgress />
            </Box>
        )
    }

};

export default Doctors;