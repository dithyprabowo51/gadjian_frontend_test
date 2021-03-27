import React, { useEffect, useState } from 'react'
import './UserCard.css'

const UserCard = () => {
  const [windowSize, setWindowSize] = useState(1440)
  const handleResizeWindow = () => {
    setWindowSize(window.innerWidth)
  }
  useEffect(() => {
    setWindowSize(window.innerWidth)
    window.addEventListener('resize', handleResizeWindow)
  }, [])
  return (
    <div className="user-card">
      <div className="row border-bottom justify-content-between pb-2">
        <div className="col-10">
          Personel ID: <span className="text-info">123456</span>
        </div>
        <div className="col">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div className={windowSize < 768 ? 'd-flex align-items-center py-4' : 'py-4'}>
        <div className="user-photo text-center m-auto">
          <img src="https://randomuser.me/api/portraits/women/88.jpg" width={windowSize < 768 ? '80px' : '128px'} height={windowSize < 768 ? '80px' : '128px'} alt="user-avatar" />
        </div>
        <div className={windowSize < 768 ? 'user-detail ms-1' : 'user-detail mt-3'}>
          <div className="mb-2">
            <div>Name</div>
            <div className="text-secondary">Adityo Prabowo</div>
          </div>
          <div className="mb-2">
            <div>Telephone</div>
            <div className="text-secondary">081211692165</div>
          </div>
          {
            windowSize >= 768 ?
              <div>
                <div className="mb-2">
                  <div>Birthday</div>
                  <div className="text-secondary">30 Juni 1996</div>
                </div>
                <div className="mb-2">
                  <div>Email</div>
                  <div className="text-secondary">dithyprabowo51@gmail.com</div>
                </div>
              </div>
              :
              null
          }
        </div>
      </div>
    </div>
  )
}

export default UserCard