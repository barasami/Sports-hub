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
        <td className='tbl' key={Name}><img className='imgs' src={SquadLogo} alt={Name}/></td>
        <td className='tbl'>{Name}</td>
        <td className='tbl'>{Played}</td>
        <td className='tbl'>{Winned}</td>
        <td className='tbl'>{Tie}</td>
        <td className='tbl'>{Loosed}</td>
        <td className='tbl'>{Position}</td>
        <td className='tbl'>{Points}</td>
      </tr>
    )
   }) 
  return (
    <div className='table'>
      <div>
        <div className='mytable'>
          <h2 className='heading'>Table</h2>
        </div>
        {Mytable}
      </div>
    </div>
  )
}

export default Tablehome