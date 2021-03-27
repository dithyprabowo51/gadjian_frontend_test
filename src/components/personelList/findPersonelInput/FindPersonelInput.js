import React from 'react'
import './FindPersonelInput.css'

const FindPersonelInput = () => {
  return (
    <div className="find-personel-input">
      <form>
        <div className="row align-items-center">
          <div className="col-2 btn-search-personel">
            <i className="fas fa-search text-info"></i>
          </div>
          <div className="col">
            <input type="text" className="input-personel" placeholder="Find Personel" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default FindPersonelInput