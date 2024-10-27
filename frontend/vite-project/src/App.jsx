import './App.css';
import { Login } from './Login';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import { Dashboard } from './Dashboard';
import youtube  from './assets/youtube.svg';
import spotify  from './assets/spotify.svg';
import instagram  from './assets/instagram.svg';


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="navbar-container">
          <Navbar /> {/* Barra de navegación en la parte superior */}
        </div>
        <div className="main-container">
          <div className="menu-container">
            {/* Contenido del menú lateral */}
            <ul>
              <img class="iconos" src={youtube} alt="" />
              <li><a href="https://www.svgrepo.com/vectors/spotify/"><img class="iconos" src={instagram} alt="" /></a></li>
              <img class="iconos" src={spotify} alt="" />
            </ul>
          </div>
          <div className="content-container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Register' element={<Register />} />
              <Route path='/Dashboard' element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
