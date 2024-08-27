import React from "react";
import './Register.css';
import pantalla from './assets/pantalla.png.jpg';

function Register(){
    return(
        <div className="register-container">
        <h1>Registre su Usuario</h1>
        <img src={pantalla} alt="pantalla" />

        </div> 

    );
}

export default Register;