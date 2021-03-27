import React from 'react'
import './UserCard.css'

const UserCard = () => {
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
      <div className="user-photo text-center m-auto my-4">
        <img src="https://randomuser.me/api/portraits/women/88.jpg" width="128px" height="128px" alt="user-avatar" />
      </div>
      <div className="user-detail">
        <div className="mb-2">
          <div>Name</div>
          <div className="text-secondary">Adityo Prabowo</div>
        </div>
        <div className="mb-2">
          <div>Telephone</div>
          <div className="text-secondary">081211692165</div>
        </div>
        <div className="mb-2">
          <div>Birthday</div>
          <div className="text-secondary">30 Juni 1996</div>
        </div>
        <div className="mb-2">
          <div>Email</div>
          <div className="text-secondary">dithyprabowo51@gmail.com</div>
        </div>
      </div>
    </div>
  )
}

export default UserCard