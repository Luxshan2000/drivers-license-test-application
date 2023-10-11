import React, { useState, useEffect } from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function GoogleLoginButton() {
    const navigate = useNavigate()
    const responseMessage = (response) => {
        axios.defaults.withCredentials = true
        axios.post('http://localhost:5000/api/auth/googleLogin', { token: response.access_token })
            .then(response => {
                // Handle the successful response here
                console.log(response.data);
                // alert('login successful')
                navigate('/dashboard',{replace : true})
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error('Registration failed:', error.response);
            });
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    const onClick = useGoogleLogin({
        flow: 'implicit',
        onSuccess: responseMessage,
        onError: errorMessage
    })

    return (
        <div>

            {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
            <Button onClick={onClick} type="submit" className="mb-3 task-button" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 1 / 3, textAlign: 'start' }}>
                    <i class="bi bi-google"></i>
                </div>
                <div style={{ flex: 2 / 3, textAlign: 'start' }}>
                    Login with Google
                </div>


            </Button>
            {/* <Button onClick={onClick}>Test</Button> */}
        </div>
    );
}
export default GoogleLoginButton;