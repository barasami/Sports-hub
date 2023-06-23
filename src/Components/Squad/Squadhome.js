import React, { useEffect, useState } from 'react'
import { squadNews } from './squad'
import './Squad.css'

function Squadhome() {
    const[squad,setSquad]=useState([])
    useEffect(()=>{
        squadNews()
        .then(({data})=>{
            setSquad(data)
        })
    },[])

    
  return (
    <div className='squad'>
      <h2 className='heading'>Table</h2>
      <div>
        
      </div>
    </div>
  )
}

export default Squadhome