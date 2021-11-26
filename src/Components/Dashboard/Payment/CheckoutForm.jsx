import React, {useEffect, useState} from 'react';
import {Box, Button, CircularProgress} from "@mui/material";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import useNotification from "../../../Hooks/useNotification";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const CheckoutForm = ({appointment, id}) => {
    const navigate = useNavigate()
    const {userPayment, errorNotify} = useNotification()
    const {price,patientName} = appointment
    const {user} = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    useEffect(() => {
        const url= 'http://localhost:8000/create-payment-intent'
        fetch(url,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({price}),
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [price])


    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return ;
        }
        setProcessing(true)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            setError(error.message)
            errorNotify(errorMessage)
        }else{
            setError('')
            console.log(paymentMethod)
        }
        // PAYMENT INTENT
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: user.email
                    },
                },
            },
        );
        if(intentError){
            console.log(intentError.message)
            errorNotify(errorMessage)
        }else {
            setError('')
            userPayment()
            setProcessing(false)
            // SAVE TO DATABASE
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transactionID: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url= `http://localhost:8000/api/book-appointment/${id}`
            axios.put(url, payment).then(res=>{
               const result = res.data
                if(result.modifiedCount>0){
                    navigate('/dashboard')
                }
            })
        }
    }
    return (
        <Box sx={{px:5}}>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                { processing ? <CircularProgress /> :  <Button sx={{my: 2}} type="submit" variant="contained" disabled={!stripe}>Pay ${price}</Button>}
            </form>
        </Box>
    );
};

export default CheckoutForm;