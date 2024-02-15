import React from 'react'

import { NavLink,Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    

   

    <img src="https://i.morioh.com/210712/966f5d93.webp" alt="" width='200px' />

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
        <NavLink to='/dashboard' style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}}>Dashboard</NavLink>
        </li>

        {/* <li>
        <NavLink to='/login' style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}}>LogIN</NavLink>
        </li> */}


      {/* <li>
        <NavLink to='/post' style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}}>Post</NavLink>
        </li> */}

        <li>
        <NavLink to='/post/mobile/1' style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}}>Post With ID</NavLink>
        </li>
      
      </ul>
    
    </nav>

    <Outlet />



    </>
  )
}

export default Navbar