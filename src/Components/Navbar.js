import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
         <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/booking'>Booking</Link></li>
        <li><Link to='/user'>User</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
        <li><Link to='/login'>Login</Link></li>
       
        </ul>
        </nav>


    </div>
  )
}
