import React from 'react'
import './AddPersonelButton.css'

const AddPersonelButton = () => {
  return (
    <div className="add-personel-button bg-info">
      <div className="row align-items-center justify-content-between">
        <div className="col d-flex align-items-center" style={{ height: '35px', color: 'white', fontWeight: 'bold' }}>
          Add Personal
        </div>
        <div className="col-2">
          <i className="fas fa-plus text-white text-center"></i>
        </div>
      </div>
    </div>
  )
}

export default AddPersonelButton