import React, { useEffect, useState } from 'react'
import { tableNews } from './table'
import './Table.css'

function Tablehome() {
    const[table,setTable]=useState([])
    useEffect(()=>{
        tableNews()
        .then(({data})=>{
            setTable(data)
            console.log(data);
        })
    },[])

   const Mytable=table?.map(({Tie,Winned,Position,Played,Points,Loosed,SquadLogo,Name})=>{
    return(
      <tr>
        <td key={Name}><img src={SquadLogo} alt={Name}/></td>
        <td>{Name}</td>
        <td>{Played}</td>
        <td>{Winned}</td>
        <td>{Tie}</td>
        <td>{Loosed}</td>
        <td>{Position}</td>
        <td>{Points}</td>
      </tr>
    )
   }) 
  return (
    <div className='table'>
      <h2 className='heading'>Table</h2>
      <div>
        {Mytable}
      </div>
    </div>
  )
}

export default Tablehome