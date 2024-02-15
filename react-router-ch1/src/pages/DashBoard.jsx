import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashBoard = () => {
    let navigate = useNavigate()
    let data = {
        'name':'Raj',
    }
  return (
    <>
    <h2>DashBoard Page</h2>
    <button onClick={()=>{navigate("/logout",{state:data})}}>LogOut</button>
    </>
  )
}

export default DashBoard