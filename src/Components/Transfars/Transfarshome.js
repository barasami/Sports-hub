import React, { useEffect, useState } from 'react'
import { nRomours } from './tnews'

function Transfarshome() {
    const[romour,setRomour]=useState([])
    useEffect(()=>{
        nRomours()
        .then(({data})=>{
            setRomour(data)
            console.log(data);
            
        })
    },[])
  return (
    <div>Transfarshome</div>
  )
}

export default Transfarshome