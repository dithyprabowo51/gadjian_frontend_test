import React, { useState, useEffect } from 'react'
import './App.css'

// Components
import Sidebar from './components/sidebar/Sidebar.js'
import Navbar from './components/navbar/Navbar.js'

// Containers
import PersonelList from './containers/personelList/PersonelList.js'

// Router
import { Route } from 'react-router-dom'

const App = () => {
  const [windowSize, setWindowSize] = useState(1440)
  const [isShowSidebar, setIsShowSidebar] = useState(true)
  useEffect(() => {
    setWindowSize(window.innerWidth)
    window.addEventListener('resize', handleResizeWindow)
  }, [])

  useEffect(() => {
    if (windowSize < 768) {
      setIsShowSidebar(false)
    } else {
      setIsShowSidebar(true)
    }
  }, [windowSize])

  const handleResizeWindow = () => {
    setWindowSize(window.innerWidth)
  }

  const handleToggleSidebar = () => {
    setIsShowSidebar(!isShowSidebar)
  }

  return (
    <div className="App">
      <div className="row">
        <Navbar handleToggleSidebar={handleToggleSidebar} />
      </div>
      <div className="row">
        {
          isShowSidebar ?
            <div className="col-2">
              <Sidebar />
            </div>
            :
            null
        }
        <div className="col">
          <Route exact path="/">
            <PersonelList />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;
