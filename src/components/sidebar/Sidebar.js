import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="row menu-container mb-3">
        <div className="col-2">
          <i className="fas fa-home"></i>
        </div>
        <div className="col sidebar-text">Beranda</div>
      </div>
      <div className="row menu-container mb-3">
        <div className="col-2">
          <i className="fas fa-users"></i>
        </div>
        <div className="col sidebar-text text-info">Personel List</div>
      </div>
      <div className="row menu-container mb-3">
        <div className="col-2">
          <i className="fas fa-calendar-alt"></i>
        </div>
        <div className="col sidebar-text">Daily Attendance</div>
      </div>
    </div>
  )
}

export default Sidebar