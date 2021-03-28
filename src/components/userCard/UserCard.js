import React, { useEffect, useState } from 'react'
import './UserCard.css'

const UserCard = (props) => {
  const [windowSize, setWindowSize] = useState(1440)
  const handleResizeWindow = () => {
    setWindowSize(window.innerWidth)
  }
  useEffect(() => {
    setWindowSize(window.innerWidth)
    window.addEventListener('resize', handleResizeWindow)
  }, [])

  const handleConvertBirthdate = datePayload => {
    const fullDate = new Date(datePayload)
    let date = `${fullDate.getDate()}`
    let month = `${fullDate.getMonth() + 1}`
    if (date.length < 2) {
      date = `0${date}`
    }
    if (month.length < 2) {
      month = `0${month}`
    }
    return `${date}-${month}`
  }

  return (
    <div className="user-card">
      <div className="row border-bottom justify-content-between pb-2">
        <div className="col-10">
          <p>Personel ID</p>
          <p className="text-info" style={{ fontSize: '12px', marginTop: '-15px' }}>{props.user.login.uuid}</p>
        </div>
        <div className="col">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div className={windowSize < 768 ? 'd-flex align-items-center py-4' : 'py-4'}>
        <div className="user-photo text-center m-auto">
          <img src={props.user.picture.large} width={windowSize < 768 ? '80px' : '128px'} height={windowSize < 768 ? '80px' : '128px'} alt="user-avatar" />
        </div>
        <div className={windowSize < 768 ? 'user-detail ms-1' : 'user-detail mt-3'}>
          <div className="mb-2">
            <div>Name</div>
            <div className="text-secondary">{`${props.user.name.first} ${props.user.name.last}`}</div>
          </div>
          <div className="mb-2">
            <div>Telephone</div>
            <div className="text-secondary">{props.user.phone}</div>
          </div>
          {
            windowSize >= 768 ?
              <div>
                <div className="mb-2">
                  <div>Birthday</div>
                  <div className="text-secondary">{handleConvertBirthdate(props.user.dob.date)}</div>
                </div>
                <div className="mb-2">
                  <div>Email</div>
                  <div className="text-secondary">{props.user.email}</div>
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