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
        <form onSubmit={SubmitMe}>
            <div>
                <input type='text' placeholder='League ' 
                value={league} onChange={(e)=>setLeague(e.target.value)}/>
            </div>
            <div>
                <button>Search</button>
            </div>
        </form>
    </div>
  )
}

export default Tableform