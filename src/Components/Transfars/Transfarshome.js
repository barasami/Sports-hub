import React, { useEffect, useState } from 'react'
import { nRomours } from './tnews'

function Transfarshome() {
    const[romour,setRomour]=useState([])
    useEffect(()=>{
        nRomours()
        .then(({data})=>{
            setRomour(data)
            
        })
    },[])

    const myclab=romour?.clubs
    const myplayer=romour?.players

    const clubs=myclab?.map(({competitionName,name,logoImage,id})=>{

      return(
        <tr key={id}>
          <td><img src={logoImage} alt={name} /></td>
          <td>{competitionName}</td>
          <td>{name}</td>

        </tr>
      )

    })

    const players=myplayer?.map((data)=>{

      const{playerImage,nationImage,playerName,club,id}=data
      return(
        <tr key={id}>
          <td><img src={nationImage} alt={club}/></td>
          <td><img src={playerImage} alt={club}/></td>
          <td>{club}</td>
          <td>{playerName}</td>
        </tr>
      )
    })
  return (
    <div>
      <h2>Transfers</h2>
      <div>
        {clubs}
      </div>
      <div>
        {players}
      </div>
    </div>
  )
}

export default Transfarshome