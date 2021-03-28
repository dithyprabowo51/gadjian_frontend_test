import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = (props) => {
  const [windowSize, setWindowSize] = useState(1440)
  const handleResizeWindow = () => {
    setWindowSize(window.innerWidth)
  }
  useEffect(() => {
    setWindowSize(window.innerWidth)
    window.addEventListener('resize', handleResizeWindow)
  }, [])

  const handleToggleSidebar = () => {
    props.handleToggleSidebar()
  }

  return (
    <div className="nav-component px-5 py-2">
      <div className="logo d-flex align-items-center">
        {
          windowSize < 768 ?
            <div onClick={handleToggleSidebar} className="mx-2">
              <i className="fas fa-bars text-secondary"></i>
            </div>
            :
            null
        }
        <div className={windowSize < 768 ? 'mx-2' : null}>
          <h2 className="text-info">Gadjian</h2>
        </div>
      </div>
      <div className="user d-flex align-items-center">
        {
          windowSize >= 768 ?
            <div>
              <div>Hallo, <span className="text-info">Angeles</span></div>
            </div>
            :
            null
        }
        <div className="mx-3">
          <img src="https://randomuser.me/api/portraits/women/88.jpg" width="40px" height="40px" alt="avatar" style={{ borderRadius: '50%' }} />
        </div>
      </div>
    </div>
  )
}

export default Navbar