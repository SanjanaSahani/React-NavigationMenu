import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/SanjanaSahani")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    })
  return (
    <div className=' m-4 bg-slate-200 text-black p-4 text-3xl'>Github Followers: {data.followers}
    <img className='m-4 h-52 w-52' src={data.avatar_url} alt="Profile Picture" />
    </div>
  )
}

export default Github