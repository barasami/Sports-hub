import React, { useEffect, useState } from 'react'
import { squadNews } from './squad'

function Squadhome() {
    const[squad,setSquad]=useState([])
    useEffect(()=>{
        squadNews()
        .then(({data})=>{
            setSquad(data)
        })
    },[])

    let coolSqd=squad?.map(({Winned,Tie,SquadLogo,Position,Points,Played,Name,Loosed})=>{
      return(
        <tr>
          <td><img src={SquadLogo} alt={Name} /></td>
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
    <div>
      <h2>Table</h2>
      <div>
        {coolSqd}
      </div>
    </div>
  )
}

export default Squadhome