import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'


function Nav() {
  return (
    <div className='navigation'>
        <div className='nav'>
           <div><Link to='/'>Home</Link></div> 
           <div><Link to='/news'>News</Link></div> 
           <div><Link to='/squad'>Squad</Link></div> 
           <div><Link to='/transfers'>Transfers</Link></div> 
           <div><Link to='/table'>Standing</Link></div> 
        </div>
    </div>
  )
}

export default Nav