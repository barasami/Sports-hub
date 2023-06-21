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

      const{playerImage,nationImage,playerName,club}=data
      return(
        <div>
          <div>

          </div>
        </div>
      )
    })
  return (
    <div>
      <h2>Transfers</h2>
      <div>
        {clubs}
      </div>
    </div>
  )
}

export default Transfarshome