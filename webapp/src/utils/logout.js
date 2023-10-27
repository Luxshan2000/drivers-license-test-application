import React from 'react'
import axios from 'axios';
import { BACKEND_URL } from './constants';
 
 export const logout = () => {
    axios.defaults.withCredentials = true
    console.log("clciked")
    // Add logout functionality here
    axios.post(`${BACKEND_URL}/api/auth/logout`)
    .then((res)=>{
      window.location.reload(true);
      window.location.href = "/";
    }).catch((err)=>console.log(err))
  };



  