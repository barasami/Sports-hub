import React from 'react'
import './Footer.css'

function Footer() {
    const thisyear=new Date().getFullYear()
  return (
    <div className='footer'>
        <div className='foot'>
            <p className='copy'>&copy;Copyright{thisyear}All football news</p>
        </div>
    </div>
  )
}

export default Footer