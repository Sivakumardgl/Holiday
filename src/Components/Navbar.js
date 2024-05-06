import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
         <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/order'>Booking</NavLink></li>
        {/* <li><Link to='/user'>User</Link></li> */}
        <li><NavLink to='/signu'>Signup</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/admin'>Admin</NavLink></li>
       
        </ul>
        </nav>


    </div>
  )
}
