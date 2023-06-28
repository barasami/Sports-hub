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
    let firstOut=allFirst[1]

    //second matches
    let allSecond=Object.values(myallfix[1] || {})
    let secondOut=allSecond[1]

    //third matches
    let allthird=Object.values(myallfix[1] || {})
    let thirdOut=allthird[1]

    

    let myFirst=firstOut?.map(({MatchDay,MatchTime,awayLogo,awayTeam,homeLogo,homeTeam})=>{
      return(
        <tr key={homeTeam} className='fixturedata'>
          <td>{MatchDay}</td>
          <td><img className='img' src={homeLogo} alt={homeTeam} /></td>
          <td>{homeTeam}</td>
          <td><img className='img' src={awayLogo} alt={awayTeam} /></td>
          <td>{awayTeam}</td>
          <td>{MatchTime}</td>
        </tr>
      )
    })

    //second matches

    let mySecond=secondOut?.map(({MatchDay,MatchTime,awayLogo,awayTeam,homeLogo,homeTeam})=>{
      return(
        <tr key={homeTeam} className='fixturedata'>
          <td>{MatchDay}</td>
          <td><img className='img' src={homeLogo} alt={homeTeam} /></td>
          <td>{homeTeam}</td>
          <td><img className='img' src={awayLogo} alt={awayTeam} /></td>
          <td>{awayTeam}</td>
          <td>{MatchTime}</td>
        </tr>
      )
    })


    //third matches

    let myThird=thirdOut?.map(({MatchDay,MatchTime,awayLogo,awayTeam,homeLogo,homeTeam})=>{
      return(
        <tr key={homeTeam} className='fixturedata'>
          <td>{MatchDay}</td>
          <td><img className='img' src={homeLogo} alt={homeTeam} /></td>
          <td>{homeTeam}</td>
          <td><img className='img' src={awayLogo} alt={awayTeam} /></td>
          <td>{awayTeam}</td>
          <td>{MatchTime}</td>
        </tr>
      )
    })

   
  return (
    <div className='fixture'>
      <div>
        <div className='head'>
          <h2 className='heading'>Fixture</h2>
        </div>
        <div>
          <div className='rounds'>First Round</div>
          {myFirst}
        </div>
        <div>
          <div className='rounds'>Second Round</div>
          {mySecond}
        </div>
        <div>
          <div className='rounds'>Third Round</div>
          {myThird}
        </div>
      </div>
    </div>
  )
}

export default Fixturehome