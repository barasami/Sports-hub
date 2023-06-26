import React, { useEffect, useState } from 'react'
import { myFixture } from './fixture'
import './Fixture.css'

function Fixturehome() {
  const[fixture,setFixture]=useState([])
    useEffect(()=>{
        myFixture()
        .then(({data})=>{
            setFixture(data)
            console.log(data);
        })
    },[])

    
    let myallfix=Object.entries(fixture[0] || {})
    let allFirst=Object.values(myallfix[0] || {})
    let allOut=allFirst[1]
    

    let myAll=allOut?.map(({MatchDay,MatchTime,awayLogo,awayTeam,homeLogo,homeTeam})=>{
      return(
        <tr>
          <td>{MatchDay}</td>
          <td><img src={homeLogo} alt={homeTeam} /></td>
          <td>{homeTeam}</td>
          <td><img src={awayLogo} alt={awayTeam} /></td>
          <td>{awayTeam}</td>
          <td>{MatchTime}</td>
        </tr>
      )
    })

   
  return (
    <div className='fixture'>
      <h2 className='heading'>Fixture</h2>
      <div>
        <div>
        {myAll}
        </div>
      </div>
    </div>
  )
}

export default Fixturehome