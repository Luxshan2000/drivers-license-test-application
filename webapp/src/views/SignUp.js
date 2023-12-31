import React, { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../assets/CSS/signUp.css'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import GoogleLoginButton from "../components/GoogleLoginButton";
import FacebookLoginButton from "../components/FacebookLoginButton";
import Spinner from 'react-bootstrap/Spinner';
import { BACKEND_URL } from "../utils/constants";


export default function SignUp() {
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [conpassword, setConPassword] = useState("")
    const [validated, setValidated] = useState(false)

    const [feedBack, setFeedback] = useState()

    const [loading, setLoading] = useState(false)

    
    const handleRegister = (e)=>{

        setLoading(true)

        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation(); 
            setValidated(true)
            setLoading(false)
            return 
        }

       setValidated(true)


    

        
        if(password != conpassword){
            setFeedback("Password mismatch!")
            return
        }
        //18.61.20.118
        axios.defaults.withCredentials = true
        axios.post(`${BACKEND_URL}/api/auth/signup`, {email:email, password:password, name:userName})
        .then(response => {
            // Handle the successful response here

            setUserName("")
            setEmail("")
            setPassword("")
            setConPassword("")
            
            
            navigate("/passwordverify", { replace: true });

            

        })
        .catch(error => {
            // Handle any errors that occur during the request
            if(error.response){
               setFeedback( error.response.data.error)
            }else{
                setFeedback("Network Error!")
            }
            
        }).finally(()=>{
            
            setLoading(false)
        })
    }

    return (
        <div className="container-fluid m-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100vh' }}>
            <div className="blurEffect" style={{ width: '500px' }}>
                <h1 className="mb-4" style={{textAlign:'center'}}>SIGN-UP</h1>
                <Form noValidate validated={validated} onSubmit={handleRegister}>
                    
                    <FloatingLabel
                        controlId="floatingInput1"
                        label="Name"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                    >
                        <Form.Control disabled={loading} value={userName} onChange={(e)=> setUserName(e.target.value)}  type="text" placeholder="Enter your name" required />
                        <Form.Control.Feedback type="invalid">Name cann't be empty!</Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput2"
                        label="Email address"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                        aria-required
                    >
                        <Form.Control disabled={loading} value={email} onChange={(e)=> setEmail(e.target.value)} type="email" size="sm" placeholder="name@example.com" required />
                        <Form.Control.Feedback type="invalid">Please put a valid email!</Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                        aria-required={true}
                    >
                        <Form.Control disabled={loading} value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" required />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput3"
                        label="Re-enter password"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                    >
                        <Form.Control disabled={loading} value={conpassword} onChange={(e)=>setConPassword(e.target.value)} type="password" placeholder="Re-enter password" required/>
                    </FloatingLabel>

                   {feedBack && <Alert onClose={()=> setFeedback("") } variant="danger" className=" text-center" dismissible >{feedBack}</Alert> }
                
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Button type='submit' className="mb-3 task-button">
                        {loading? (<Spinner color="gray" animation="border" />) :"Sign Up" }
                        
                    </Button>
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
                    {/* <FacebookLoginButton/> */}
                    
                    
                    
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