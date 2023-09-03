import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../assets/CSS/signUp.css'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PasswordVerify() {
    return (
        <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="blurEffect" style={{ width: '500px' }}>
                <h1 className="mb-4">VERIFICATION</h1>
                <p>Please enter the verification OTP code that was sent.The code is valid for 10 minutes</p>
                <p>Check someone@gmail.com</p>
                <>
                    <Row>
                        <Col></Col>
                        <Col><Form.Control type="text" /></Col>
                        <Col><Form.Control type="text" /></Col>
                        <Col><Form.Control type="text" /></Col>
                        <Col><Form.Control type="text" /></Col>
                        <Col></Col>
                    </Row>



                </>
                

                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
                    <Button className="mb-3 task-button">Verify</Button>
                    <p className="mb-3" style={{ fontSize: '12', fontWeight: 'lighter' }}>
                        Didn't receive the verification OTP?<a href='#'><span>Resend</span></a>
                    </p>
                </div>





            </div>
        </div >

    )
}