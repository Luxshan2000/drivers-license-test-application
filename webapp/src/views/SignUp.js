import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../assets/CSS/signUp.css'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from 'axios';
import GoogleLoginButton from "../components/GoogleLoginButton";
import FacebookLoginButton from "../components/FacebookLoginButton";

export default function SignUp({onSubmit}) {

    const handleRegister = ()=>{
        onSubmit()
        axios.post('http://localhost:5000/api/auth/signup', {email:"someone@gmail.com", password:"pwd123", name:"someone"})
        .then(response => {
            // Handle the successful response here
            console.log('Registration successful:', response.data);
        })
        .catch(error => {
            // Handle any errors that occur during the request
            console.error('Registration failed:', error.response.data);
        });
    }

    return (
        <div className="container-fluid m-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100vh' }}>
            <div className="blurEffect" style={{ width: '500px' }}>
                <h1 className="mb-4" style={{textAlign:'center'}}>SIGN-UP</h1>
                <Form>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                    >
                        <Form.Control type="text" placeholder="Enter your name" required />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                        aria-required
                    >
                        <Form.Control type="email" size="sm" placeholder="name@example.com" required />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                        aria-required={true}
                    >
                        <Form.Control type="password" placeholder="Password" required />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Re-enter password"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                    >
                        <Form.Control type="password" placeholder="Re-enter password" required/>
                    </FloatingLabel>
                
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Button onClick={handleRegister} type='submit' className="mb-3 task-button">Sign Up</Button>
                    <p className="hr-line"><span>OR</span></p>
                    
                    <GoogleLoginButton/>
                    {/* <Button type='submit' className="mb-3 task-button" style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <div style={{flex:1/3,textAlign:'start'}}>
                        <i class="bi bi-facebook"></i>
                        </div>
                        <div style={{flex:2/3,textAlign:'start'}}>
                        Login with Facebook
                        </div>
                    
                       
                    </Button> */}
                    <FacebookLoginButton/>
                    
                    
                    
                    <p className="mb-3" style={{fontSize:'12',fontWeight:'lighter',textAlign:'center'}}>
                        By signing up ,you are agreeing to our terms, Data
                        Policy and Cookies Policy
                    </p>
                    <p className="mb-3" style={{fontSize:'12',fontWeight:'lighter',textAlign:'center'}}>
                        Already have an account ? <Link to="/login"><span>Login Now</span></Link>
                    </p>
                </div>
                </Form>





            </div>
        </div >

    )
}