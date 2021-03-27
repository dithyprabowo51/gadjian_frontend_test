import React from 'react'
import './PersonelListHeader.css'

// Components
import FindPersonelInput from '../findPersonelInput/FindPersonelInput.js'

const PersonelListHeader = () => {
  return (
    <div className="personel-list-header">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-4 col-md-12">
          <h2 className="text-info">Personel List</h2>
          <h3>List of all personels</h3>
        </div>
        <div className="col-lg-5 col-md-12">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <FindPersonelInput />
            </div>
            <div className="col-lg-5 col-md-12">
              <FindPersonelInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonelListHeader