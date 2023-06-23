import React, { useEffect, useState } from 'react'
import { nRomours } from './tnews'
import './Transfers.css'

function Transfarshome() {
    const[romour,setRomour]=useState([])
    useEffect(()=>{
        nRomours()
        .then(({data})=>{
            setRomour(data)
            console.log(data);
        })
    },[])

   const transFered=romour?.map(({newClub,oldClub,playerName,playerRole,price,transferDate,transferType
})=>{
    return(
      <tr>
        <tr>{transferDate}</tr>
        <td>{oldClub}</td>
        <td>{newClub}</td>
        <td>{playerName}</td>
        <td>{playerRole}</td>
        <td>{price}</td>
        <td>{transferType}</td>
      </tr>
    )
   })
  return (
    <div className='transfers'>
      <h2 className='heading'>Transfers</h2>
      <div>
        {transFered}
      </div>
      
    </div>
  )
}

export default Transfarshome