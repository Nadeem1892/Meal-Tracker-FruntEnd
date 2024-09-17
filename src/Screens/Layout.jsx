import React from 'react'
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';


function Layout() {

  // const navigate = useNavigate();
  // useEffect(()=>{
  //   const interval = setInterval(() => {
  //     const token = localStorage.getItem("auth");
  //     if (!token) {
  //       navigate("/");
  //     }
  //   }, 1000);
  //   return () =>clearInterval(interval)
  // }, [navigate])

  return (
    <div className="flex flex-col h-full bg-gray-200 lg:h-screen ">
      {/* Header */}
      <Header/>
        {/* Main Content */}
        <main className="w-full h-full mt-20">
        
         <div className='w-full h-full'>
         <Outlet /> {/* Render nested routes here */}
         </div>
        </main>
      
    </div>
  )
}

export default Layout