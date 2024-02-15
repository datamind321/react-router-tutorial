import React from 'react'
import { useLocation } from 'react-router-dom'

const Login = () => {
 let location = useLocation()
  return (
    <>
    <h2>LogIn Page</h2>
    <span className={{'color':'red'}}>{location.state.note}</span>
    </>
  )
}

export default Login