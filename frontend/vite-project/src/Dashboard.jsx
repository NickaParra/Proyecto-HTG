import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Dashboard.css';

export function Dashboard() {
    const [userData, setUser ] = useState(null); // Estado para almacenar los datos del usuario
    const navigate = useNavigate(); // Hook para redirigir a otras rutas

    useEffect(() => {
        const token = localStorage.getItem('token'); // Obtener el token del localStorage

        // Verificar si el usuario está autenticado o redirigir si no lo está
        if (!token) {
            navigate('/login'); // Redirige si no hay token
            return;
        }

        // Realizar la solicitud para obtener los datos del usuario
        axios.get('http://localhost:3000/protected', {
            headers: {
                Authorization: `Bearer ${token}` // Enviar el token en el encabezado de autorización
            }
        })
        .then(res => {
            setUser (res.data.user); // Guarda los datos del usuario si la autenticación es exitosa
        })
        .catch(err => {
            console.log(err);
            navigate('/login'); // Redirige en caso de error (por ejemplo, token inválido)
        });
    }, [navigate]);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <h1 className="navbar-title"></h1>
                    {userData && (
                        <div className="user-info">
                            <span className="email">{userData.email}</span>
                        </div>
                    )}
                </div>
            </nav>

            <h1 className="h1">¡Hola! Bienvenidos a Hiit The Gym </h1>
            <h2>¡Comienza con alguno de nuestros programas de entretenimiento HOY mismo!</h2>

            <div className="card-container">
                <div className="card">
                    <h3>Reto Quema Grasa</h3>
                    <iframe 
                        width="100%" 
                        height="200" 
                        src="https://www.youtube.com/embed/vAy6xceYevY?t=706" 
                        title="Video de YouTube" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>

                <div className="card">
                    <h3>Reto Renacer</h3>
                    <iframe 
                        width="100%" 
                        height="200" 
                        src="https://www.youtube.com/embed/REN-D42zzgo?t=8" 
                        title="Video de YouTube" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>

                <div className="card">
                    <h3>Reto Fit Essentials</h3>
                    <iframe 
                        width="100%" 
                        height="200" 
                        src="https://www.youtube.com/embed/MuvCQaLB2rY?t=12" 
                        title="Video de YouTube" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>

            <div className="video-container">
                <h2>Somos HTG Podcast</h2>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/sqa_EGXiJMU?list=PL4JW8l9Nyc23l-7XeEpv7TY1HZjuSFWk2" 
                    title="Video de YouTube" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope
                                        ; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </>
    );
}

export default Dashboard;