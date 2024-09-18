import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Register.css';
import pantalla from './assets/pantalla.png.jpg';

export function Register() {
    // Estados para cada campo del formulario
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalType, setModalType] = useState('');
    const [step, setStep] = useState(1); // Paso actual del formulario
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            setModalMessage("Las contraseñas no coinciden.");
            setModalType('error');
            setIsModalOpen(true);
            return;
        }

        // Enviar los datos al servidor
        axios.post('http://localhost:4000/register', {
            fullName, age, gender, address, phone, email, password
        })
            .then(res => {
                if (res.status === 200) {
                    setModalMessage("Registro exitoso.");
                    setModalType('success');
                    setIsModalOpen(true);

                    // Redirigir después de un breve tiempo
                    setTimeout(() => {
                        setIsModalOpen(false);
                        navigate('/dashboard');
                    }, 2000);
                }
            })
            .catch(err => {
                console.log(err);
                setModalMessage("Error al registrarse. Verifica los datos.");
                setModalType('error');
                setIsModalOpen(true);
            });
    }

    // Función para cerrar el modal
    const closeModal = () => setIsModalOpen(false);

    // Función para cancelar el registro y limpiar el formulario
    const handleCancel = () => {
        setFullName('');
        setAge('');
        setGender('');
        setAddress('');
        setPhone('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setStep(1); // Regresar al primer paso
    };

    return (
        <div className="register-container">
            <h1>Registro de Usuario</h1>
            <img src={pantalla} alt="pantalla" />

            <form onSubmit={step === 2 ? handleSubmit : e => e.preventDefault()}>
                {step === 1 && (
                    <fieldset>
                        <label>
                            Nombre completo
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Nombre completo"
                                value={fullName}
                                onChange={e => setFullName(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Edad
                            <input
                                type="number"
                                name="age"
                                placeholder="Edad"
                                value={age}
                                onChange={e => setAge(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Género
                            <select
                                name="gender"
                                value={gender}
                                onChange={e => setGender(e.target.value)}
                                required
                            >
                                <option value="">Selecciona tu género</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </label>
                        <label>
                            Dirección
                            <input
                                type="text"
                                name="address"
                                placeholder="Dirección"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Celular
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Celular"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                required
                            />
                        </label>

                        <div className="buttons-container">
                            <button type="button" onClick={() => setStep(2)} className="outline primary">Siguiente</button>
                        </div>
                    </fieldset>
                )}
                
                {step === 2 && (
                    <fieldset>
                        <label>
                            Email
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Crear contraseña
                            <input
                                type="password"
                                name="password"
                                placeholder="Crear contraseña"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Confirmar contraseña
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirmar contraseña"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                required
                            />
                        </label>

                        <div className="buttons-container">
                            <button type="button" onClick={() => setStep(1)} className="outline secondary">Anterior</button>
                            <button type="submit" className="outline primary">Registrar</button>
                        </div>
                    </fieldset>
                )}
            </form>

            {/* Mostrar el modal si isModalOpen es true */}
            {isModalOpen && (
                <div className={`modal ${modalType}`}>
                    <div className="modal-content">
                        <h2>{modalType === 'success' ? 'Éxito' : 'Error'}</h2>
                        <p>{modalMessage}</p>
                        {modalType === 'error' && <button onClick={closeModal}>Cerrar</button>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Register;

