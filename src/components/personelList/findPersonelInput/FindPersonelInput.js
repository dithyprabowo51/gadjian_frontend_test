import React from 'react'
import './FindPersonelInput.css'

const FindPersonelInput = () => {
  return (
    <div className="find-personel-input">
      <div className="row align-items-center">
        <div className="col-2">
          <i className="fas fa-search text-info"></i>
        </div>
        <div className="col">
          <input type="text" id="input-personel" placeholder="Find Personel" />
        </div>
      </div>
    </div>
  )
}

export default FindPersonelInput