import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';


function Nav() {
  return (
    <div className='navigation'>
        <div className='nav'>
          <div><SportsSoccerIcon color='inherit' className='soccer'/></div>
           <div><Link to='/' className='links'>Home</Link></div> 
           <div><Link to='/news' className='links'>News</Link></div> 
           <div><Link to='/transfers' className='links'>Transfers</Link></div> 
           <div><Link to='/table' className='links'>Standing</Link></div> 
        </div>
    </div>
  )
}

export default Nav