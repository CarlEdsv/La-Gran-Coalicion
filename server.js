// Importar Express
const express = require('express');
const path = require('path');

// Inicializar Express
const app = express();

// Configurar una ruta estática para servir archivos de tu proyecto frontend
app.use(express.static(path.join(__dirname, 'public')));

// Definir una ruta simple para el servidor
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/empresa/html/ejemplo.html'));
});

// Configurar el puerto
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT} http://localhost:3000`);
});
