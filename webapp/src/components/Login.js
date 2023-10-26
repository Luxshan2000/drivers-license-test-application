import React, { useEffect, useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';





export default function Login() {
   
   

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [validated, setValidated] = useState(false)

    const [loading, setLoading] = useState(false)
    const [feedBack, setFeedback] = useState()


    
    
    
   

    
    return (
        <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="blurEffect" style={{ width: '500px' }}>
                <h1 className="mb-4" style={{textAlign:'center'}}>LOGIN</h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit} >

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                    >
                        <Form.Control onChange={(e)=>setEmail(e.target.value)} value={email} type="email" size="sm" placeholder="name@example.com" required />
                        <Form.Control.Feedback type="invalid">Please put a valid email!</Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        // className="mb-3"
                        style={{ fontSize: 'small' }}
                    >
                        <Form.Control required  onChange={(e)=>setPassword(e.target.value)} value={password}  type="password" placeholder="Password" />
                        <Form.Control.Feedback type="invalid">Password cann't be empty!</Form.Control.Feedback>
                    </FloatingLabel>
                                                                                                                           
                
                <div style={{textAlign:'left'}}>
                <Link to='/resetpassword' style={{fontSize:12,}}>
                            Forgot your password?
                            </Link>               
                </div>

                {feedBack && <Alert onClose={()=> setFeedback("") } variant="danger" className=" text-center" dismissible >{feedBack}</Alert> }

                <div style={{ display: 'flex', flexDirection: 'column',marginTop: '50px'}}>
                    <Button  type="submit" className="mb-3 task-button">
                    {loading? (<Spinner color="gray" animation="border" />) :"Login" }
                    </Button>
                 
                    <p className="mb-3" style={{ fontSize: '12', fontWeight: 'lighter',textAlign:'center'}}>
                        If you haven't registered yet? <Link to='/signup'><span>Register now</span></Link>
                    </p>
                </div>
                </Form>





            </div>
        </div >

    )
}