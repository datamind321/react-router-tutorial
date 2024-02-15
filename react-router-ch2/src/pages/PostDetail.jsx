import React from 'react'
import { useParams } from 'react-router-dom'


const PostDetail = () => {
    let {category} = useParams()
  return ( 
    <>
    <h2>This is Post Detail Page</h2>
    <h2> You selected: {category}</h2>
    
    </>
  )
}

export default PostDetail