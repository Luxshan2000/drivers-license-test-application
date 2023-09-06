import { Outlet, Navigate} from "react-router-dom";

import React from 'react'
import { useAuthContext } from "../context/AuthContext";

function PrivateRoutes() {
    const {auth}=  useAuthContext()
  return (
    auth.token ? <Outlet/> : <Navigate to='/' replace={true}/>
  )
}

export default PrivateRoutes