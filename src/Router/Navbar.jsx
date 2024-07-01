import React from 'react'
import{Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
       <Link to='/home'> <li>home</li></Link>
       <Link to='/about'><li>About</li></Link>
       <Link to='/login'><li>login</li></Link>
      </nav>
    </div>
  )
}

export default Navbar
