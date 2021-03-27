import './App.css'

// Components
import Sidebar from './components/sidebar/Sidebar.js'
import Navbar from './components/navbar/Navbar.js'

// Containers
import PersonelList from './containers/personelList/PersonelList.js'

// Router
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
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
