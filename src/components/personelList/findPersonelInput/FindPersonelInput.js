import React, { useState } from 'react'
import './FindPersonelInput.css'

// Hooks redux
import { useDispatch, useSelector } from 'react-redux'

// Action Type
import { SET_USER } from '../../../redux/actionType/actionType.js'
import { SET_IS_SHOW_USER_DETAIL } from '../../../redux/actionType/actionType.js'

const FindPersonelInput = (props) => {
  const dispatch = useDispatch()
  const allUsers = useSelector(state => state.users)

  const [userInput, setUserInput] = useState('')

  const getUser = () => {
    const userDetail = allUsers.find(user => user.name.first.toLowerCase() === userInput.toLowerCase())
    dispatch({ type: SET_USER, data: userDetail })
    dispatch({ type: SET_IS_SHOW_USER_DETAIL, data: true })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (userInput) {
      props.setUserInput(userInput)
      getUser()
    } else {
      dispatch({ type: SET_IS_SHOW_USER_DETAIL, data: false })
    }
  }
  return (
    <div className="find-personel-input">
      <form onSubmit={handleSubmit}>
        <div className="row align-items-center">
          <div className="col-2 btn-search-personel">
            <i className="fas fa-search text-info"></i>
          </div>
          <div className="col">
            <input value={userInput} onChange={(event) => setUserInput(event.target.value)} type="text" className="input-personel" placeholder="Find Personel" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default FindPersonelInput