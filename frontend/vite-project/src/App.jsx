import './App.css';
import { Login } from './Login';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';

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
              <li>Youtube</li>
              <li>Instagram</li>
              <li>Spotify</li>
            </ul>
          </div>
          <div className="content-container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Register' element={<Register />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
