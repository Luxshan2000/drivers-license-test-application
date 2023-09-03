import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../assets/CSS/signUp.css'
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/esm/Col";

export default function Login() {
    return (
        <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="blurEffect" style={{ width: '500px' }}>
                <h1 className="mb-4">LOGIN</h1>
                <>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                    >
                        <Form.Control type="email" size="sm" placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        // className="mb-3"
                        style={{ fontSize: 'small' }}
                    >
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                                                                                                                           
                </>
                <div style={{textAlign:'left'}}>
                <a href='#' style={{fontSize:12,}}>
                            Forgot your password?
                            </a>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column',marginTop: '50px'}}>
                    <Button className="mb-3 task-button">Login</Button>
                    {/* <hr className="hr-lines"/>
                    <p>OR</p> */}
                    <p className="hr-line"><span>OR</span></p>

                    <Button className="mb-3 task-button" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ flex: 1 / 3, textAlign: 'start' }}>
                            <i class="bi bi-google"></i>
                        </div>
                        <div style={{ flex: 2 / 3, textAlign: 'start' }}>
                            Login with Google
                        </div>


                    </Button>
                    <Button className="mb-3 task-button" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ flex: 1 / 3, textAlign: 'start' }}>
                            <i class="bi bi-facebook"></i>
                        </div>
                        <div style={{ flex: 2 / 3, textAlign: 'start' }}>
                            Login with Facebook
                        </div>


                    </Button>





                    <p className="mb-3" style={{ fontSize: '12', fontWeight: 'lighter' }}>
                        If you haven't registered yet? <a href='#'><span>Register now</span></a>
                    </p>
                </div>





            </div>
        </div >

    )
}