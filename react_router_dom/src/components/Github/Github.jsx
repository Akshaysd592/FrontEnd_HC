import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
//    1. 
    const data = useLoaderData(); //to access the data that is passed by loader property in NavLink
    
    
    // 2.  direct method
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //      fetch('https://api.github.com/users/akshaysd592')
    //      .then((response)=>response.json())
    //      .then((data)=>{
    //         console.log(data);
    //         setData(data);
    //      } )
    // },
    // [])




  return (
    <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>Github Respositories : {data.public_repos} </div>
        <img
            src={data.avatar_url} alt='Github profile' width={300}
        />
    </>
    
  )
}

export default Github


export const githubRepos = async()=>{
    const response =  await fetch('https://api.github.com/users/akshaysd592')
    return response.json()
}