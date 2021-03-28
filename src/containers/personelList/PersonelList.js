import React, { useEffect, useState } from 'react'
import './PersonelList.css'

// Components
import PersonalListHeader from '../../components/personelList/personelListHeader/PersonelListHeader.js'
import UserCard from '../../components/userCard/UserCard.js'
import NextPage from '../../components/nextPage/NextPage.js'
import PreviousPage from '../../components/previousPage/PreviousPage.js'

// Hooks React-Redux
import { useDispatch, useSelector } from 'react-redux'

// Actions Redux
import { fetchUsers } from '../../redux/actions/fetchUsers.js'

const PersonelList = () => {
  const allUsers = useSelector(state => state.users)
  const userDetail = useSelector(state => state.user)
  const isShowUserDetail = useSelector(state => state.isShowUserDetail)
  const isLoading = useSelector(state => state.isLoadingFetchUsers)
  const dispatch = useDispatch()

  const [users, setUsers] = useState([])
  const [currentFirstIndexUsers, setCurrentFirstIndexUsers] = useState(0)
  const [currentLastIndexUsers, setCurrentLastIndexUsers] = useState(4)

  const [userInput, setUserInput] = useState('')

  const handleNextPage = () => {
    if (currentLastIndexUsers < allUsers.length) {
      const userSliced = allUsers.slice(currentLastIndexUsers, currentLastIndexUsers + 4)
      const userSlicedCopy = JSON.parse(JSON.stringify(userSliced))
      setUsers(userSlicedCopy)
      setCurrentFirstIndexUsers(currentLastIndexUsers)
      setCurrentLastIndexUsers(currentLastIndexUsers + 4)
    }
  }

  const handlePreviousPage = () => {
    if (currentFirstIndexUsers > 0) {
      const userSliced = allUsers.slice(currentFirstIndexUsers - 4, currentFirstIndexUsers)
      const userSlicedCopy = JSON.parse(JSON.stringify(userSliced))
      setUsers(userSlicedCopy)
      setCurrentFirstIndexUsers(currentFirstIndexUsers - 4)
      setCurrentLastIndexUsers(currentFirstIndexUsers)
    }
  }

  useEffect(() => {
    dispatch(fetchUsers())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const userSliced = allUsers.slice(currentFirstIndexUsers, currentLastIndexUsers)
    const userSlicedCopy = JSON.parse(JSON.stringify(userSliced))
    setUsers(userSlicedCopy)
    // eslint-disable-next-line
  }, [allUsers])

  const handleRenderCard = () => {
    if (!isShowUserDetail) {
      return users.map(user => (
        <div key={user.login.uuid} className="col-lg-3 col-md-12 my-2">
          <UserCard user={user} />
        </div>
      ))
    } else if (userDetail?.name) {
      return (
        <div className="col-lg-3 col-md-12 my-2">
          <UserCard user={userDetail} />
        </div>
      )
    } else {
      return (
        <h3 className="text-center">{userInput} Not Found</h3>
      )
    }
  }

  return (
    <div className="personel-list">
      <PersonalListHeader setUserInput={(value) => setUserInput(value)} />
      {
        isLoading ?
          <div className="row justify-content-center mt-4">
            <div className="col-1">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          :
          <div className="row mt-4 justify-content-center">
            {handleRenderCard()}
          </div>
      }
      <div className="d-flex justify-content-center mt-4">
        <div className="mx-2">
          <PreviousPage
            handlePreviousPage={handlePreviousPage}
            currentFirstIndexUsers={currentFirstIndexUsers}
            currentLastIndexUsers={currentLastIndexUsers}
          />
        </div>
        <div className="mx-2">
          <NextPage
            handleNextPage={handleNextPage}
            currentFirstIndexUsers={currentFirstIndexUsers}
            currentLastIndexUsers={currentLastIndexUsers}
          />
        </div>
      </div>
    </div>
  )
}

export default PersonelList