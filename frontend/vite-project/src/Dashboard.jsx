import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Dashboard.css';

export function Dashboard() {
<<<<<<< HEAD
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
            setUser (res.data); // Guarda los datos del usuario si la autenticación es exitosa
        })
        .catch(err => {
            console.log(err);
            navigate('/login'); // Redirige en caso de error (por ejemplo, token inválido)
        });
=======
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
>>>>>>> 7dc36d73e5849ab3229e597d870aa014b8e59078
    }, [navigate]);

    return (
        <div className="dashboard-container">
            <h1>Bienvenido al Dashboard</h1>
            <h2>Sé tu mejor versión</h2>
            {userData ? (
                <div>
<<<<<<< HEAD
                    <p>Email: {userData.user.email}</p> {/* Muestra el correo electrónico del usuario */}
                    {/* Puedes agregar más información del usuario aquí */}
                    
                </div>
            ) : (
                <p>Cargando...</p> // Mensaje de carga mientras se obtienen los datos
            )}

        </div>
        
    );
}

export default Dashboard;
=======
                    <p>Email: {userData.email}</p>
                    {/* Puedes agregar más información del usuario aquí */}
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}
>>>>>>> 7dc36d73e5849ab3229e597d870aa014b8e59078
