require('./database');
const express = require('express');
const app = express();
const cors = require('cors');
//settings
app.set('port',process.env.PORT || 4000);
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
app.use(express.json());
if(process.env.NODE_ENV==='production'){
    app.use(express.static('frontend/build'))
}
//routes
app.use('/', require('./routes/registros'))


const main = async() =>{
    await app.listen(app.get('port'))
    console.log('servidor corriendo en el puerto',app.get('port'));
    
}

main();