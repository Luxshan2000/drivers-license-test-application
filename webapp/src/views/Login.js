import React, { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../assets/CSS/signUp.css'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import axios from 'axios';
import { getSessionCookie } from "../utils/cookie";
import jwt_decode from 'jwt-decode'

export default function Login() {
    const navigate = useNavigate()
    const {setAuth,auth} = useAuthContext()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    
    

    const handleSubmit = (e)=>{
        e.preventDefault()

        axios.defaults.withCredentials = true
        axios.post('http://localhost:5000/api/auth/login', {email:email, password:password})
        .then(response => {
            // Handle the successful response here
        
            console.log(jwt_decode(getSessionCookie("token")))
            // setAuth(true)

            if(jwt_decode(getSessionCookie("token")).isVerified){
                navigate("/dashboard",{replace:true})
            }
            else{
                navigate("/dashboard",{replace:true})
            }

            

            
        })
        .catch(error => {
            // Handle any errors that occur during the request
            console.log('Login failed!')
        }).finally(()=>{
            setEmail("")
            setPassword("")
        })
        
        
        // if(auth.isVerified){
        //     navigate("/dashboard",{replace:true})
        // }
        // else{
        //     navigate("/passwordverify",{replace:true})
        // }
        
    }
    return (
        <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="blurEffect" style={{ width: '500px' }}>
                <h1 className="mb-4" style={{textAlign:'center'}}>LOGIN</h1>
                <Form onSubmit={handleSubmit}>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                    >
                        <Form.Control onChange={(e)=>setEmail(e.target.value)} value={email} type="email" size="sm" placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        // className="mb-3"
                        style={{ fontSize: 'small' }}
                    >
                        <Form.Control onChange={(e)=>setPassword(e.target.value)} value={password}  type="password" placeholder="Password" />
                    </FloatingLabel>
                                                                                                                           
                
                <div style={{textAlign:'left'}}>
                <Link to='/resetpassword' style={{fontSize:12,}}>
                            Forgot your password?
                            </Link>               
                </div>

                <div style={{ display: 'flex', flexDirection: 'column',marginTop: '50px'}}>
                    <Button  type="submit" className="mb-3 task-button">Login</Button>
                    {/* <hr className="hr-lines"/>
                    <p>OR</p> */}
                    <p className="hr-line"><span>OR</span></p>

                    <Button type="submit" className="mb-3 task-button" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ flex: 1 / 3, textAlign: 'start' }}>
                            <i className="bi bi-google"></i>
                        </div>
                        <div style={{ flex: 2 / 3, textAlign: 'start' }}>
                            Login with Google
                        </div>


                    </Button>
                    <Button className="mb-3 task-button" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ flex: 1 / 3, textAlign: 'start' }}>
                            <i className="bi bi-facebook"></i>
                        </div>
                        <div style={{ flex: 2 / 3, textAlign: 'start' }}>
                            Login with Facebook
                        </div>
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