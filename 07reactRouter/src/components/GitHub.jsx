import React from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data= useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/mehakaijaz')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData[data]
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub followers: {data?.followers}
    <img src={data?.avatar_url} alt="git pic  " width={300} height={300}/>
    </div>
  )
}

export default GitHub

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mehakaijaz')
    return response.json()}