import React, { useEffect, useState } from 'react'
import { myFixture } from './fixture'
import './Fixture.css'

function Fixturehome() {
    const[fixture,setFixture]=useState([])
    useEffect(()=>{
        myFixture()
        .then(({data})=>{
            setFixture(data)
            
        })
    },[])

   
  return (
    <div className='fixture'>
      <h2 className='heading'>Fixture</h2>
      <div>

      </div>
    </div>
  )
}

export default Fixturehome