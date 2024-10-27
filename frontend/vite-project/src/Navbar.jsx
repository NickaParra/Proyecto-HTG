import React from "react";
import { Link } from 'react-router-dom';
import htg from './assets/htg.jpg';
import './Navbar.css';


function Navbar(){
    return(
        <div className="Navbar">
            <nav role="navigation" aria-label="Main navigation">
                <img src={htg} alt="htg" />
                <ul>
                    <li>
                        <strong> HTG Hiit The Gym</strong> 
                                             
                        <li>
                            <Link to="/"> Home </Link>
                        </li>
                        <li>
                            <Link to="/Login"> Login </Link>
                        </li>
                        <li>
                            <Link to="/Register"> Register</Link>
                        </li>
                    </li>
                </ul>


            </nav>

        </div>
        
    )

}
export default Navbar;