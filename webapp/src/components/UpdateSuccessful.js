import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../assets/CSS/signUp.css'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PasswordUpdated() {
    return (
        <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="blurEffect" style={{ width: '500px' }}>
                <h1 className="mb-4">PASSWORD UPDATED</h1>
                <div style={{alignItems:'center',justifyContent:'center'}}>
                <i class="bi bi-check-circle-fill" style={{fontSize: '150px'}}></i>
                </div>
                
                <p>Your password has been updated successfully.</p>
                
                
                

                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
                    <Button className="mb-3 task-button">Login</Button>
                </div>





            </div>
        </div >

    )
}