// Importar módulos con require
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const cookieParser = require('cookie-parser'); 

// Configuración del servidor
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Conexión a base de datos
const Conexión = mysql.createConnection({
    host: "localhost",
    port: 3307,
    database: "datos usuarios", // Nombre correcto de la base de datos
    user: "root",
    password: ""
});

// Abrir la conexión a la base de datos
Conexión.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
        return;
    }
    console.log("Conexión a la base de datos establecida con éxito.");
});

// Ruta para iniciar sesión
app.post('/login', (req, res) => {
    const db = "SELECT * FROM users WHERE email = ? AND contraseña = ?";
    Conexión.query(db, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.status(500).json("Error en inicio de sesión");

        if (data.length > 0) {
            return res.status(200).json("Bienvenido a la plataforma");
        } else {
            return res.status(401).json("Usuario incorrecto");
        }
    });
});

// Ruta para registrar un nuevo usuario
app.post('/register', (req, res) => {
    const { fullName, age, gender, address, phone, email, password } = req.body;

    // Validar que todos los campos estén presentes
    if (!fullName || !age || !gender || !address || !phone || !email || !password) {
        return res.status(400).json("Todos los campos son requeridos.");
    }

    // Consulta para insertar un nuevo usuario
    const query = `
        INSERT INTO users (full_name, age, gender, address, phone, email, contraseña)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    Conexión.query(query, [fullName, age, gender, address, phone, email, password], (err, result) => {
        if (err) {
            console.error("Error al registrar usuario:", err);
            return res.status(500).json("Error al registrar usuario.");
        }

        return res.status(200).json("Registro exitoso.");
    });
});

// Ruta para verificar autenticación
app.get('/check-auth', (req, res) => {
    // Verificar la cookie de autenticación
    if (req.cookies.auth === 'authenticated') {
        // Aquí podrías devolver información del usuario si es necesario
        res.status(200).json({ email: 'user@example.com' });
    } else {
        res.status(401).json("No autenticado");
    }
});

// Poner a escuchar el servidor
app.listen(4000, () => {
    console.log("Servidor escuchando en el puerto 4000...");
});
