import React from "react";
import { Link } from 'react-router-dom';
import htg from './assets/htg.jpg';
import './Navbar.css';

function Navbar({ userData }) {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
                <div className="container-fluid">
                    <img src={htg} alt="htg" className="navbar-brand" />
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Register" className="nav-link">Register</Link>
                            </li>
                        </ul>
                    </div>
                    {userData && (
                        <div className="user-info">
                            <span className="email">{userData.email}</span>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;