import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"; // Importar useNavigate para redirigir
import './Login.css';


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para mostrar el modal
    const [modalMessage, setModalMessage] = useState('');  // Mensaje del modal
    const [modalType, setModalType] = useState('');        // Tipo de mensaje (éxito o error)
    const navigate = useNavigate(); // Hook para redirigir a otras rutas

    const apiKey = "6$ty9EyLqWHPJzVd$KFtV7MK3"; // Define tu clave API aquí

    function handleSubmit(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        
        // Enviar solicitud de inicio de sesión con email, password y apiKey
        axios.post('http://localhost:3000/login', { email, password }, {
            headers: {
                'Authorization': `Bearer ${apiKey}` // Enviar la apiKey en el encabezado de autorización
            }
        })
            .then(res => {
                if (res.status === 200) {
                    // Almacenar el token en localStorage
                    localStorage.setItem('token', res.data.token);

                    // Configurar mensaje de éxito
                    setModalMessage("Inicio de sesión exitoso.");
                    setModalType('success');
                    setIsModalOpen(true); // Mostrar el modal de éxito 

                    // Redirigir después de un breve tiempo
                    setTimeout(() => {
                        setIsModalOpen(false);
                        navigate('/Dashboard'); // Redirigir al Dashboard
                    }, 2000);
                }
            })
            .catch(err => {
                console.log(err);
                // Configurar mensaje de error
                setModalMessage("Error al iniciar sesión. Verifica tus credenciales.");
                setModalType('error');
                setIsModalOpen(true); // Mostrar el modal de error
            });
    }

    // Función para cerrar el modal
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="login-container">
            <h1>Inicio de sesión</h1>
          

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            onChange={e => setEmail(e.target.value)} // Actualizar el estado del email
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)} // Actualizar el estado de la contraseña
                        />
                    </label>
                    <button className="outline secondary">Iniciar</button>
                </fieldset>
            </form>

            {/* Mostrar el modal si isModalOpen es true */}
            {isModalOpen && (
                <div className={`modal ${modalType}`}>
                    <div className="modal-content">
                        <h2>{modalType === 'success' ? 'Éxito' : 'Error'}</h2>
                        <p>{modalMessage}</p>
                        {/* Botón para cerrar el modal manualmente (solo en caso de error) */}
                        {modalType === 'error' && <button onClick={closeModal}>Cerrar</button>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;