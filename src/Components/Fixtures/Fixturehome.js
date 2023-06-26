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
        <tr>
          <td>{MatchDay}</td>
          <td><img src={homeLogo} alt={homeTeam} /></td>
          <td>{homeTeam}</td>
          <td>V/s</td>
          <td><img src={awayLogo} alt={awayTeam} /></td>
          <td>{awayTeam}</td>
          <td>{MatchTime}</td>
        </tr>
      )
    })

    //second matches

    let mySecond=secondOut?.map(({MatchDay,MatchTime,awayLogo,awayTeam,homeLogo,homeTeam})=>{
      return(
        <tr>
          <td>{MatchDay}</td>
          <td><img src={homeLogo} alt={homeTeam} /></td>
          <td>{homeTeam}</td>
          <td>V/s</td>
          <td><img src={awayLogo} alt={awayTeam} /></td>
          <td>{awayTeam}</td>
          <td>{MatchTime}</td>
        </tr>
      )
    })


    //third matches

    let myThird=thirdOut?.map(({MatchDay,MatchTime,awayLogo,awayTeam,homeLogo,homeTeam})=>{
      return(
        <tr>
          <td>{MatchDay}</td>
          <td><img src={homeLogo} alt={homeTeam} /></td>
          <td>{homeTeam}</td>
          <td>V/s</td>
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
        {myFirst}
        </div>
        <div>
          {mySecond}
        </div>
        <div>
          {myThird}
        </div>
      </div>
    </div>
  )
}

export default Fixturehome