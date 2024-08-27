import React from "react";
import './Home.css';
import pantalla from './assets/pantalla.png.jpg';

function Home(){
    return(
        <div className="home-container">
            <h1>Sé tu mejor versión</h1>
            <img src={pantalla} alt="pantalla" />
        
        </div> 
     
    );
}

export default Home;
