import React from 'react'
import './NextPage.css'

// Global state redux
import { useSelector } from 'react-redux'

const NextPage = (props) => {
  const allUsers = useSelector(state => state.users)
  const handleNextPage = () => {
    props.handleNextPage()
  }
  return (
    <div>
      {
        props.currentLastIndexUsers < allUsers.length ?
          <button onClick={handleNextPage} className="next-page">
            <div>Next Page <span><i className="fas fa-angle-right"></i></span></div>
          </button>
          :
          <button disabled onClick={handleNextPage} className="next-page" style={{ cursor: 'not-allowed' }}>
            <div>Next Page <span><i className="fas fa-angle-right"></i></span></div>
          </button>
      }
    </div>
  )
}

export default NextPage