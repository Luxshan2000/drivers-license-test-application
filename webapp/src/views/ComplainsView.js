import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../assets/CSS/signUp.css'
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/esm/Col";
import PasswordVerify from "../components/PasswordVerify";


export default function ComplaintsForm() {
    return (
        <div className="container-fluid" style={{ display: 'flex', padding:'50px', height: '100vh' }}>
            <Form>
                    <h1 className="mb-4" style={{ textAlign: 'left' }}>We are here to assist you.</h1>
                    <p>Please complete the form below for your complaint.</p>
                    <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridDate">
                        <Form.Label >Date</Form.Label>
                        <Form.Control type="date" placeholder="dd/mm/yyyy" />
                    </Form.Group>


                    <div className="col-12 col-md-6 col-lg-6">
                        <p className="hr-line "></p>
                    </div>

                    <Form.Group className="mb-3" controlId="formGridSubject">
                        <Form.Label >Subject</Form.Label>
                        <Form.Control type="input" placeholder="Complaint about" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Complaint</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Description" />
                    </Form.Group>



                    <div className="col-12 col-md-6 col-lg-6" style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>

                        <Button className="mb-3 task-button" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ textAlign: 'start' }}>
                                Submit complaint
                            </div>
                        </Button>
                    </div>





                

            </Form>

        </div >

    )
}