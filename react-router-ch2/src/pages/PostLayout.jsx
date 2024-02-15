import React from 'react'
import { Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    
    <>
    <h2>This is Post LayOut</h2>
    <Outlet />
    </>
  )
}

export default PostLayout