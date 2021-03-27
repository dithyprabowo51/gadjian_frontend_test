import React from 'react'
import './PersonelListHeader.css'

// Components
import FindPersonelInput from '../findPersonelInput/FindPersonelInput.js'
import AddPersonelButton from '../addPersonelButton/AddPersonelButton.js'

const PersonelListHeader = () => {
  return (
    <div className="personel-list-header">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-4 col-md-12">
          <h2 className="text-info">Personel List</h2>
          <h4 className="text-secondary">List of all personels</h4>
        </div>
        <div className="col-lg-5 col-md-12">
          <div className="row">
            <div className="col-lg-5 col-md-12 my-1">
              <FindPersonelInput />
            </div>
            <div className="col-lg-5 col-md-12 my-1">
              <AddPersonelButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonelListHeader