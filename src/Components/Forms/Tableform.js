import React, { useState } from 'react'
import './Forms.css'

function Tableform({getLeague}) {
    const[league,setLeague]=useState(' ')
    const SubmitMe=(e)=>{
        e.preventDefault()
        if(!league || league === ' ')
        return
        getLeague(league);
        setLeague(' ')
    }
  return (
    <div>
        <form onSubmit={SubmitMe} className='form'>
            <div className='mytext'>
                <input type='text' placeholder='League Type ' 
                value={league} onChange={(e)=>setLeague(e.target.value)} className='input'/>
            </div>
            <div className='mybtn'>
                <button className='btn'>Search</button>
            </div>
        </form>
    </div>
  )
}

export default Tableform