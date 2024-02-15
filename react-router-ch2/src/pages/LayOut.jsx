import React from 'react'

import { NavLink,Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>


    <h1>React Router Layout</h1>
    

    <nav>
    
    <ul>
      <li> 
        <NavLink to='/' style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}}>Home</NavLink>
        </li>
      <li>
        <NavLink to='/about' style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}}>About</NavLink>
        </li>
      <li>
        <NavLink to='/contact' style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}}>Contact</NavLink>
        </li>

       


  

        <li>
        <NavLink to='/post' style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}}>Post</NavLink>
        </li>
      
      </ul>
    
    </nav>

    <Outlet />



    </>
  )
}

export default Navbar