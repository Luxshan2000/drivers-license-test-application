import React, { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../assets/CSS/signUp.css'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getSessionCookie } from "../utils/cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PasswordVerify() {
    const navigate = useNavigate()
    const [digit1, setDigit1] = useState("")
    const [digit2, setDigit2] = useState("")
    const [digit3, setDigit3] = useState("")
    const [digit4, setDigit4] = useState("")


    const handleSubmit = (e)=>{
        e.preventDefault()
        if(digit1.length != 1 && digit2 != 1 && digit3 != 1 && digit4 != 1){
            return
        }
        //18.61.20.118
        axios.defaults.withCredentials = true
        const otp = digit1+""+ digit2 + "" + digit3 + "" + digit4
        axios.post('http://localhost:5000/api/auth/verifyotp', {token: getSessionCookie('token'), otp: otp})
        .then(response => {
            // Handle the successful response here
            console.log('Verification successful!', response.data);
            
            navigate("/dashboard", { replace: true });

            

        })
        .catch(error => {
            // Handle any errors that occur during the request
            console.log('Verification failed!');
        }).finally(()=>{
            setDigit1("")
            setDigit2("")
            setDigit3("")
            setDigit4("")
        })
    }

    
    return (
        <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="blurEffect" style={{ width: '500px' }}>
                <h1 className="mb-4">VERIFICATION</h1>
                <p>Please enter the verification OTP code that was sent.The code is valid for 10 minutes</p>
                <p>Check someone@gmail.com</p>
                <Form onSubmit={handleSubmit}>
                    <>
                        <Row>
                            
                                <Col></Col>
                                <Col><Form.Control onChange={(e)=> setDigit1(e.target.value) } value={digit1} type="text" /></Col>
                                <Col><Form.Control onChange={(e)=> setDigit2(e.target.value) } value={digit2} type="text" /></Col>
                                <Col><Form.Control onChange={(e)=> setDigit3(e.target.value) } value={digit3} type="text" /></Col>
                                <Col><Form.Control onChange={(e)=> setDigit4(e.target.value) } value={digit4} type="text" /></Col>
                                <Col></Col>
                        </Row>



                    </>
                    

                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
                        <Button type='submit' className="mb-3 task-button">Verify</Button>
                        <p className="mb-3" style={{ fontSize: '12', fontWeight: 'lighter' }}>
                            Didn't receive the verification OTP?<a href='#'><span>Resend</span></a>
                        </p>
                    </div>
                </Form>





            </div>
        </div >

    )
}