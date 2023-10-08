import React, { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../assets/CSS/signUp.css'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import GoogleLoginButton from "../components/GoogleLoginButton";
import FacebookLoginButton from "../components/FacebookLoginButton";

export default function SignUp() {
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [conpassword, setConPassword] = useState("")

    
    const handleRegister = (e)=>{
        e.preventDefault()
        if(password != conpassword){
            return
        }
        //18.61.20.118
        axios.defaults.withCredentials = true
        axios.post('http://localhost:5000/api/auth/signup', {email:email, password:password, name:userName})
        .then(response => {
            // Handle the successful response here
            console.log('Registration successful!', response.data);
            
            navigate("/passwordverify", { replace: true });

            

        })
        .catch(error => {
            // Handle any errors that occur during the request
            console.log('Registration failed!');
        }).finally(()=>{
            setUserName("")
            setEmail("")
            setPassword("")
            setConPassword("")
        })
    }

    return (
        <div className="container-fluid m-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100vh' }}>
            <div className="blurEffect" style={{ width: '500px' }}>
                <h1 className="mb-4" style={{textAlign:'center'}}>SIGN-UP</h1>
                <Form onSubmit={handleRegister}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                    >
                        <Form.Control value={userName} onChange={(e)=> setUserName(e.target.value)}  type="text" placeholder="Enter your name" required />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                        aria-required
                    >
                        <Form.Control value={email} onChange={(e)=> setEmail(e.target.value)} type="email" size="sm" placeholder="name@example.com" required />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                        aria-required={true}
                    >
                        <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" required />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Re-enter password"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                    >
                        <Form.Control value={conpassword} onChange={(e)=>setConPassword(e.target.value)} type="password" placeholder="Re-enter password" required/>
                    </FloatingLabel>
                
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Button type='submit' className="mb-3 task-button">Sign Up</Button>
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