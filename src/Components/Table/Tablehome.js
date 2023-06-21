import React, { useEffect, useState } from 'react'
import { tableNews } from './table'

function Tablehome() {
    const[table,setTable]=useState([])
    useEffect(()=>{
        tableNews()
        .then(({data})=>{
            setTable(data)
        })
    },[])

    let myTable=table?.map(({Name,Played,Position,Tie,Winned,Points,Loosed,SquadLogo})=>{
      return(
        <tr>
          <td><img src={SquadLogo} alt={Name} /></td>
          <td>{Name}</td>
          <td>{Played}</td>
          <td>{Winned}</td>
          <td>{Tie}</td>
          <td>{Loosed}</td>
          <td>{Points}</td>
          <td>{Position}</td>
        </tr>
      )
    })
  return (
    <div>
      <h2>Table</h2>
      <div>
        {myTable}
      </div>
    </div>
  )
}

export default Tablehome