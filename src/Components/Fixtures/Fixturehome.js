import React, { useEffect, useState } from 'react'
import { myFixture } from './fixture'

function Fixturehome() {
    const[fixture,setFixture]=useState([])
    useEffect(()=>{
        myFixture()
        .then(({data})=>{
            setFixture(data)
            console.log(data);
        })
    },[])

    let me=fixture.Matchday1
    console.log(me);
  return (
    <div>Fixturehome</div>
  )
}

export default Fixturehome