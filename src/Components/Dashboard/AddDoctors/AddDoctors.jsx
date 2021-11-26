import React, {useState} from 'react';
import {Box, Grid,Typography,TextField,MenuItem, Input, Button} from "@mui/material";
import { styled } from '@mui/material/styles';
import axios from "axios";
import {dark} from "@mui/material/styles/createPalette";
import useNotification from "../../../Hooks/useNotification";
// const currencies = [
//     {
//         value: 'USD',
//         label: '$',
//     },
//     {
//         value: 'EUR',
//         label: '€',
//     },
//     {
//         value: 'BTC',
//         label: '฿',
//     },
//     {
//         value: 'JPY',
//         label: '¥',
//     },
// ];
const AddDoctors = () => {
   // const [currency, setCurrency] = React.useState('EUR');
    // const handleChange = (event) => {
    //     setCurrency(event.target.value);
    // };
    const {successNotify} = useNotification()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [image, setImage] = useState(null)

    const handleSubmit = e =>{
        e.preventDefault()
        if(!image || !name || !email){
            return
        }
        // Create an object of formData
        const formData = new FormData();
        // Update the formData object
        formData.append("fullName", name);
        formData.append('email', email);
        formData.append('mobile', mobile);
        formData.append('image', image);
        const url = 'http://localhost:8000/api/add-doctor'
        // fetch(url,{
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res=>res.json())
        //     .then(data=> console.log(data))
        //     .catch(e =>{
        //         console.error('Error', e)
        //     })
        axios.post(url, formData).then(res=>{
            const result = res.data
            if(result.insertedId){
                successNotify('Doctors Information Add Success')
                e.target.reset()
            }
        })

    }
    return (
        <Box>
            <Grid container spacing={2}  sx={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h5" sx={{mb:3}}>
                        Doctor Information Add here
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <TextField
                                sx={{width: '90%', mb: 2}}
                                label="Full Name"
                                required
                                type="text"
                                variant="standard"
                                onChange={(e)=>setName(e.target.value)}
                            />

                        </div>
                        <div>
                            <TextField
                                sx={{width: '90%', mb: 2}}
                                label="Email"
                                required
                                type="email"
                                variant="standard"
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                sx={{width: '90%', mb: 2}}
                                label="Mobile"
                                required
                                type="number"
                                variant="standard"
                                onChange={(e)=>setMobile(e.target.value)}
                            />
                        </div>
                        {/*<div>*/}
                        {/*    <TextField*/}
                        {/*        sx={{width: '90%', mb: 2}}*/}
                        {/*        label="Deparment"*/}
                        {/*        select*/}
                        {/*        value={currency}*/}
                        {/*        variant="standard"*/}
                        {/*        onChange={handleChange}*/}
                        {/*    >*/}
                        {/*        {currencies.map((option) => (*/}
                        {/*            <MenuItem key={option.value} value={option.value}>*/}
                        {/*                {option.label}*/}
                        {/*            </MenuItem>*/}
                        {/*        ))}*/}
                        {/*    </TextField>*/}
                        {/*</div>*/}
                        <div>
                            <label htmlFor="contained-button-file">
                                <Input required accept="image/*" type="file" onChange={(e)=>setImage(e.target.files[0])} />
                            </label>
                        </div>
                        <div>
                            <Button sx={{mt: 3}} variant="contained" type="submit">
                                Add Doctors
                            </Button>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AddDoctors;