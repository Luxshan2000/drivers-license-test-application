import { Outlet, Navigate} from "react-router-dom";

import React from 'react'
import { useAuthContext } from "../context/AuthContext";
import { getSessionCookie } from "../utils/cookie";
import jwt_decode from 'jwt-decode';

function PrivateRoutes() {
  

  let allow = false
  let isVerified = false

  allow  = localStorage.getItem("token")

  if(allow){
    isVerified = jwt_decode(allow).isVerified
  }

  


  
  return (
    allow ? ( isVerified ? <Outlet/> : <Navigate to='/passwordverify' replace={true}/> ) : <Navigate to='/login' replace={true}/>
  )
}

export default PrivateRoutes