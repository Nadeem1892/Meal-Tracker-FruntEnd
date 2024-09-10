import React from 'react'
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';


function Layout() {

  return (
    <div className="flex flex-col h-screen">
   
      {/* Header */}
      <Header/>
        
        {/* Main Content */}
        <main className="w-full ">
        
         <div className='w-full mt-16 lg:mt-[75px]'>
         <Outlet /> {/* Render nested routes here */}
         </div>
        </main>
      
    </div>
  )
}

export default Layout