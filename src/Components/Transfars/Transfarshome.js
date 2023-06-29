import React, { useEffect, useState } from 'react'
import { nRomours } from './tnews'
import './Transfers.css'
import CircularProgress from '@mui/material/CircularProgress';

function Transfarshome() {
    const[romour,setRomour]=useState([])
    const[load,setload]=useState(false)
    useEffect(()=>{
        setload(true)
        nRomours()
        .then(({data})=>{
            setRomour(data)
            setload(false);
        })
    },[])

   const transFered=romour?.map(({newClub,oldClub,playerName,playerRole,price,transferDate,transferType
})=>{
    return(
      <tr key={playerName}>
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
        <div>
          {load ? <CircularProgress color='success' className='circular'/> : <div>
          {transFered}
          </div>}
        </div>
      </div>
      
    </div>
  )
}

export default Transfarshome