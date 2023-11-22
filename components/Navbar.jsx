import React from 'react'
import './Navbar.css'
const navbar = () => {
  return (
    <nav className='top'>
      <div className='topInside'>
        <div>
        <input type='checkbox' name='form' value='Form Selection' />Form Selection
        </div>
        <div>
        <input type='checkbox' name='form' value='Form Selection'/>Set up
        </div>
        <div>
        <input type='checkbox' name='form' value='Form Selection'/>Form Creation
        </div>
        <div>
        <input type='checkbox' name='form' value='Form Selection'/>Review
        </div>
      </div>
    </nav>
  )
}

export default navbar
