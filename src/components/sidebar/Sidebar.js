import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="row mb-3">
        <div className="col-2">
          <i className="fas fa-home"></i>
        </div>
        <div className="col-5">Beranda</div>
      </div>
      <div className="row mb-3">
        <div className="col-2">
          <i className="fas fa-users"></i>
        </div>
        <div className="col">Personel List</div>
      </div>
      <div className="row mb-3">
        <div className="col-2">
          <i className="fas fa-calendar-alt"></i>
        </div>
        <div className="col">Daily Attendance</div>
      </div>
    </div>
  )
}

export default Sidebar