import React from 'react'
import { useParams,useSearchParams } from 'react-router-dom'

const Post = () => {

  const {category,id} = useParams()
  const [searchParams,setSearchParams] = useSearchParams()
  console.log(searchParams);
  console.log(searchParams.get('price'));
  console.log(searchParams.get('sort'));
  const searchPrice = searchParams.get('price')
  return (

        <>
        <h2>Post Page - {category} - {id}</h2>
        <h2>{searchPrice}</h2>
         </>
      
    
  )
}

export default Post