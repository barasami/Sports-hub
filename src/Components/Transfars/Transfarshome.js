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
        <td className='rows'>{transferDate}</td>
        <td className='rows'>{oldClub}</td>
        <td className='rows'>{newClub}</td>
        <td className='rows'>{playerName}</td>
        <td className='rows'>{playerRole}</td>
        <td className='rows'>{price}</td>
        <td className='rows'>{transferType}</td>
      </tr>
    )
   })
  return (
    <div className='transfers'>
      <div>
        <div className='cooltitle'>
          <h2 className='heading'>Transfers</h2>
        </div>
        {transFered}
      </div>
      
    </div>
  )
}

export default Transfarshome