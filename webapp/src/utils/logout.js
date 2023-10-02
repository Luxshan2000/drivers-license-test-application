import React from 'react'
import axios from 'axios';
 
 export const logout = () => {
    axios.defaults.withCredentials = true
    console.log("clciked")
    // Add logout functionality here
    axios.post("http://localhost:5000/api/auth/logout")
    .then((res)=>{
      window.location.reload(true);
      window.location.href = "/";
    }).catch((err)=>console.log(err))
  };



  