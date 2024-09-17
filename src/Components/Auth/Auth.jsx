import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Auth = ({children}) => {
    const navigate = useNavigate();

   
    const {token} = useSelector((state) => state.auth);
   
    console.log(token)
    
    useEffect(()=>{
      
        if (token) {
            navigate("/user")
        }else{
            
            navigate("/");
        }
     
    }, [token])
  return (
    <div>
       {children} 
    </div>
  )
}

export default Auth