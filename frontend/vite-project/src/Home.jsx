import React from "react";
import './Home.css';
// Asegúrate de importar las imágenes que vas a usar
import HTG from './assets/HTG.webp'; // Cambia la ruta según corresponda
import INICIO from './assets/inicio.jpg'; // Cambia la ruta según corresponda
import H from './assets/H.jpg'; // Cambia la ruta según corresponda

function Home() {
    return (
        <div className="home-container">
            <h1 className="h1">Bienvenido Hiiter</h1>
            <h2>Sé tu mejor versión</h2>

            <div className="card-container">
                <div className="card">
                    <h3>¿Quiénes somos?</h3>
                    <p>Hola Hitter, nosotros somos Nata, Pas y Juanse, y somos Hiit The Gym. Compartimos una misma pasión y es cambiar vidas a través del ejercicio, tenemos 26 años, somos Colombianos aunque algo de franceses tenemos en la sangre, y hemos sido atletas de alto rendimiento de toda la vida</p>
                    <img src={HTG} alt="Descripción de la imagen 1" />
                </div>

                <div className="card">
                    <h3>¿Cuándo empezamos?</h3>
                    <p>A mediados del 2019, empezamos a compartir toda nuestra experiencia en redes, con un propósito, demostrarle a cualquier persona en cualquier rincón del mundo que se puede ser su mejor versión de manera fácil, flexible y divertida, sin extremos y disfrutando el proceso.</p>
                    <img src={INICIO} alt="Descripción de la imagen 2" />
                </div>

                <div className="card">
                    <img src={H} alt="Descripción de la imagen 3" />
                    <h3>¿Cómo vamos hasta la fecha?</h3>
                    <p>Así fue como después de una pandemia logramos construir una comunidad de más de 400 mil personas y más de 10 mil vidas transformadas compartiendo esta filosofía de un fitness real. Aquí en Hiit The Gym queremos compartirte todos nuestros aprendizajes, porque aunque no somos productos terminados, hemos pasado por muchas cosas que nos formaron como las personas que somos hoy, descubrimos que cuando trabajamos en nosotros mismos con disciplina, compromiso y constancia, TODO ES POSIBLE. Bienvenid@ a esta familia. TODOS SOMOS HIIT THE GYM.</p>
                </div>
            </div>

        </div>
    );
}

export default Home;