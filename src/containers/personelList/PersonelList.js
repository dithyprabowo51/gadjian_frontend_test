import React from 'react'
import './PersonelList.css'

// Components
import PersonalListHeader from '../../components/personelList/personelListHeader/PersonelListHeader.js'
import UserCard from '../../components/userCard/UserCard.js'
import NextPage from '../../components/nextPage/NextPage.js'
import PreviousPage from '../../components/previousPage/PreviousPage.js'

const PersonelList = () => {
  return (
    <div className="personel-list">
      <PersonalListHeader />
      <div className="row mt-4">
        <div className="col-lg-3 col-md-12 my-2">
          <UserCard />
        </div>
        <div className="col-lg-3 col-md-12 my-2">
          <UserCard />
        </div>
        <div className="col-lg-3 col-md-12 my-2">
          <UserCard />
        </div>
        <div className="col-lg-3 col-md-12 my-2">
          <UserCard />
        </div>
      </div>
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