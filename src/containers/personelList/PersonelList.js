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
  const isLoading = useSelector(state => state.isLoadingFetchUsers)
  const dispatch = useDispatch()

  const [users, setUsers] = useState([])
  const [currentFirstIndexUsers, setCurrentFirstIndexUsers] = useState(0)
  const [currentLastIndexUsers, setCurrentLastIndexUsers] = useState(4)

  useEffect(() => {
    dispatch(fetchUsers())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const userSliced = allUsers.slice(currentFirstIndexUsers, currentLastIndexUsers)
    const userSlicedCopy = JSON.parse(JSON.stringify(userSliced))
    setUsers(userSlicedCopy)
    console.log(userSlicedCopy, '<<<User Slice')
  }, [allUsers])

  return (
    <div className="personel-list">
      <PersonalListHeader />
      {
        isLoading ?
          <div className="row justify-content-center mt-4">
            <div className="col-1">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          :
          <div className="row mt-4">
            {
              users.map(user => (
                <div key={user.login.uuid} className="col-lg-3 col-md-12 my-2">
                  <UserCard user={user} />
                </div>
              ))
            }
          </div>
      }
      <div className="d-flex justify-content-center mt-4">
        <div className="mx-2">
          <PreviousPage />
        </div>
        <div className="mx-2">
          <NextPage />
        </div>
      </div>
    </div>
  )
}

export default PersonelList