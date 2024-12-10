import React, { useState } from 'react'
import Postsitem from './Postsitem'

const APIrequest = () => {
    const[posts,setPosts]=useState([])
    const Fetchingdata= async ()=>{
    try{
        let url="https://jsonplaceholder.typicode.com/posts"
        let response= await fetch(url)
        let data=await response.json()
        setPosts(data)

    }  
    catch (error){
        console.log(error)
    }  
        


    }

  return (
    <div>
        <h1>click on below button for posts</h1>
        <button on onClick={Fetchingdata}>click me </button>
        {posts.map((element)=>{
            return <Postsitem title={element.title} id={element.id} key={element.id}/>

        })}
      
    </div>
  )
}

export default APIrequest
