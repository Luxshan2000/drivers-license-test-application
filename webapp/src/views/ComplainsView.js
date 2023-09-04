import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../assets/CSS/signUp.css'
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/esm/Col";
import PasswordVerify from "../components/PasswordVerify";


export default function ComplaintsForm() {
    return (
        <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{  }}>
                <h1 className="mb-4" style={{ textAlign: 'center' }}>We are here to assist you!</h1>
                <p>Please complete the form below for your complaint.</p>
                <>

                    <>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="email"
                                placeholder="name@example.com"
                                size="sm"
                            />
                            <label htmlFor="floatingInputCustom">Email address</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                                id="floatingInputCustom"
                                type="date"
                                placeholder="Date"
                                className="mb-3"
                                size='sm'
                            />
                            <label htmlFor="floatingInputCustom">Date</label>
                        </Form.Floating>
                    </>

                    <p className="hr-line"></p>
                    <Form.Floating>
                            <Form.Control
                                id="floatingInputCustom"
                                as="textarea"
                                placeholder="Complaint"
                                row={3}
                            />
                            <label htmlFor="floatingInputCustom">Complaint</label>
                        </Form.Floating>

                </>

                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>

                    <Button className="mb-3 task-button" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{textAlign: 'start' }}>
                            Submit complaint
                        </div>
                    </Button>
                </div>





            </div>
        </div >

    )
}