import React from 'react'
import './PreviousPage.css'

const PreviousPage = (props) => {
  const handlePreviousPage = () => {
    props.handlePreviousPage()
  }
  return (
    <div>
      {
        props.currentFirstIndexUsers > 0 ?
          <button onClick={handlePreviousPage} className="previous-page">
            <div><i className="fas fa-angle-left"></i> Previous Page</div>
          </button>
          :
          <button disabled onClick={handlePreviousPage} className="previous-page" style={{ cursor: 'not-allowed' }}>
            <div><i className="fas fa-angle-left"></i> Previous Page</div>
          </button>
      }
    </div>
  )
}

export default PreviousPage