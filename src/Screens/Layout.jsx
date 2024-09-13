import React, { useEffect } from 'react'
import Header from '../Components/Header';
import { Outlet, useNavigate } from 'react-router-dom';


function Layout() {

  const navigate = useNavigate();
  useEffect(()=>{
    const interval = setInterval(() => {
      const token = localStorage.getItem("auth");
      if (!token) {
        navigate("/",{replace:true});
      }
    }, 1000);
    return () =>clearInterval(interval)
  }, [navigate])

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header/>
        {/* Main Content */}
        <main className="w-full h-screen bg-gray-200">
        
         <div className='w-full h-full]'>
         <Outlet /> {/* Render nested routes here */}
         </div>
        </main>
      
    </div>
  )
}

export default Layout