import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'

const Songs = () => {
    const [songs, setSongs] = useState([]);

    useEffect(()=>{
        const fetchAllSongs = async ()=>{
            try{
                const res = await axios.get("http://localhost:5000/songs")
                console.log(res)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllSongs()
    },[])

  return (
    <div>Songs</div>
  )
}

export default Songs