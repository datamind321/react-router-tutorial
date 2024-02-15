import React from 'react'
import { useLocation } from 'react-router-dom'

const Logout = () => {
let location = useLocation()
  return (
    
    <>
    <h2>{location.state.name} User Logged Out</h2>
    </>
  )
}

export default Logout