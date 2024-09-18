import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Login.css';
import pantalla from './assets/pantalla.png.jpg';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para mostrar el modal
    const [modalMessage, setModalMessage] = useState('');  // Mensaje del modal
    const [modalType, setModalType] = useState('');        // Tipo de mensaje (éxito o error)
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:4000/login', { email, password })
            .then(res => {
                if (res.status === 200) {
                    setModalMessage("Inicio de sesión exitoso.");
                    setModalType('success');
                    setIsModalOpen(true); // Mostrar el modal de éxito

                    // Redirigir después de un breve tiempo
                    setTimeout(() => {
                        setIsModalOpen(false);
                        navigate('/dashboard');
                    }, 2000);
                }
            })
            .catch(err => {
                console.log(err);
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
            <img src={pantalla} alt="pantalla" />

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
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
