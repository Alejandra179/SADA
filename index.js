require('./database');
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')
//settings
const port =process.env.PORT || 4000;
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
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','buil','index.html'))
    })
}
//routes
app.use('/', require('./routes/registros'))


app.listen(port,() => console.log(`servidor corriendo en el puerto ${port}`));