import React, { useEffect, useState } from 'react'
import { tableNews } from './table'

function Tablehome() {
    const[table,setTable]=useState([])
    useEffect(()=>{
        tableNews()
        .then((data)=>{
            // setTable(data)
        })
    },[])
  return (
    <div>Tablehome</div>
  )
}

export default Tablehome