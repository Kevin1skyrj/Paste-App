import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 place-content-evenly mt-3'>
        <NavLink to="/" className="text-blue-600">
            Home
        </NavLink>

        <NavLink to="/pastes" className="text-blue-600">
            Pastes
        </NavLink>
    </div>
  )
}

export default Navbar