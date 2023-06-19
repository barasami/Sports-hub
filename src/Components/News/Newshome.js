import React, { useEffect, useState } from 'react'
import { myNews } from './news'

function Newshome() {
    const[news,setNews]=useState([])
    useEffect(()=>{
        myNews()
        .then(({data})=>{
            setNews(data)
            console.log(data);
        })
    },[])
  return (
    <div>Newshome</div>
  )
}

export default Newshome