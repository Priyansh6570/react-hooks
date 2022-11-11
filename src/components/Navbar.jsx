import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <Link to={'/'}>
       <h1>Hooks</h1>
       </Link>
    </nav>
  )
}

export default Navbar