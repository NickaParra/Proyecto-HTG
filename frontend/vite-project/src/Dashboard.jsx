import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Dashboard.css';

export function Dashboard() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Verificar si el usuario está autenticado o redirigir si no lo está
        axios.get('http://localhost:4000/check-auth') // Asegúrate de tener esta ruta en tu servidor
            .then(res => {
                if (res.status !== 200) {
                    navigate('/login'); // Redirige si la autenticación falla
                } else {
                    setUserData(res.data); // Guarda los datos del usuario si la autenticación es exitosa
                }
            })
            .catch(err => {
                console.log(err);
                navigate('/login'); // Redirige en caso de error
            });
    }, [navigate]);

    return (
        <div className="dashboard-container">
            <h1>Bienvenido al Dashboard</h1>
            {userData ? (
                <div>
                    <p>Email: {userData.email}</p>
                    {/* Puedes agregar más información del usuario aquí */}
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}
