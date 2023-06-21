import React from 'react'

function Footer() {
    const year=new Date().getFullYear()
  return (
    <div>
        <div>
            <p>&copy;Copyright{year}All football</p>
        </div>
    </div>
  )
}

export default Footer