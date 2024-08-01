import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data,setData] = useState([]);


    useEffect(() => {
       
        fetch("https://github.com/dipeshrathod07")
        .then(Response => Response.json())
        .then(data =>{
            console.log(data);
            setData(data);
        })
      
    }, [])
    

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.nodeValue}
    {/* <img src={data.avatar_url} alt="Github picture" width={300}/> */}
    </div>
  )
}

export default Github