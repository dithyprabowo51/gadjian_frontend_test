import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-component px-5 py-2">
      <div className="logo">
        <h2 className="text-info">Gadjian</h2>
      </div>
      <div className="user d-flex">
        <div>
          <p>Hallo, <span className="text-info">Gadjian User</span></p>
        </div>
        <div className="mx-3">
          <p>Photo</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar