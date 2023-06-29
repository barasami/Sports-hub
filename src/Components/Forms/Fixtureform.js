import React, { useState } from 'react'
import './Forms.css'

function Fixtureform({searchFixture}) {
    const[league,setLeague]=useState('')
    const submitMe=(e)=>{
        e.preventDefault()
        if(!league || league === ' ')
        return
        searchFixture(league)
        setLeague('')

    }
  return (
    <div>
       <form onSubmit={submitMe} className='form'>
            <div className='mytext'>
                <input type='text' placeholder='League type' className='input'
                 value={league} onChange={(e)=>setLeague(e.target.value)}
                />
            </div>
            <div className='mybtn'>
                <button className='btn'>Search</button>
            </div>
       </form>
    </div>
  )
}

export default Fixtureform