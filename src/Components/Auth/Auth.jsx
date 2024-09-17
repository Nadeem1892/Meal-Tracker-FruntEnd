import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Auth = ({children}) => {
    const navigate = useNavigate();
    useEffect(()=>{
      const interval = setInterval(() => {
        const token = localStorage.getItem("auth");

        if (!token) {
          navigate("/");
        }else{
            navigate("/user")
        }
      }, 10);
      return () =>clearInterval(interval)
    }, [navigate])
  return (
    <div>
       {children} 
    </div>
  )
}

export default Auth