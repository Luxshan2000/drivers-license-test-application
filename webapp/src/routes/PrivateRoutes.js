import { Outlet, Navigate} from "react-router-dom";

import React from 'react'
import { useAuthContext } from "../context/AuthContext";
import { getSessionCookie } from "../utils/cookie";


function PrivateRoutes() {
  

  let allow = false

  allow  = getSessionCookie("token")
 
  
  
  return (
    allow ? <Outlet/> : <Navigate to='/' replace={true}/>
  )
}

export default PrivateRoutes