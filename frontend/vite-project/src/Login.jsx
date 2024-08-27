import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Login.css';
import pantalla from './assets/pantalla.png.jpg';


export function Login() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:4000/login',{email,password})
        .then(res => {
            if(res.status === 200){
                navigate('/dashboard');
            }

        })

        .catch(err => console.log(err));
        
    };

    return(  
        
        <div className="login-container">
            <h1>Inicio de sesión</h1>
        <img src={pantalla} alt="pantalla" />
        
    <form>
        <fieldset>
            <label>
                Email
                <input type="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                Password
                <input type="password" name="password"placeholder="Password"onChange={e => setPassword(e.target.value)}/>

                <button class="outline secondary">Iniciar</button>
            </label>
        </fieldset>
    </form>

        </div> 
        
    );
    
}

export default Login;