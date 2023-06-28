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
       <form onSubmit={submitMe}>
            <div>
                <input type='text' placeholder='League type'
                 value={league} onChange={(e)=>setLeague(e.target.value)}
                />
            </div>
            <div>
                <button>Search</button>
            </div>
       </form>
    </div>
  )
}

export default Fixtureform