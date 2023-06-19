import React, { useEffect, useState } from 'react'
import { squadNews } from './squad'

function Squadhome() {
    const[squad,setSquad]=useState([])
    useEffect(()=>{
        squadNews()
        .then(({data})=>{
            setSquad(data)
            console.log(data);
        })
    },[])
  return (
    <div>Squadhome</div>
  )
}

export default Squadhome