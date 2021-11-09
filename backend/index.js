// TODO RECOMENDACION: cambiar esto por un modelo de clase de un server (migrarlo a clases)

require('dotenv').config()
const express = require('express');
const app = express();
require('./database');

const cors = require('cors');
//settings
// Aqui estas invocando al archivo .env y no existia aun
const port = process.env.PORT || 4000;
//middlewares
app.use(cors());
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(express.static('public'))
app.use(express.json());

//routes
app.use('/', require('./routes/registros'))


app.listen(port,() => console.log(`servidor corriendo en el puerto ${port}`));