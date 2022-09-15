const mysql = require('mysql');
const conexion = mysql.createConnection({
    user: 'fz3li9q4ez3w',
    password: 'pscale_pw_m-z58gz5MZ3AKkLFvhg0DAi1Y54juzmP1Ptv0TyJ4Gc',
    host: 'dxr75bqu8ovs.aws-sa-east-1-1.psdb.cloud',
    database: 'remaf',
    ssl:{}
    
});

conexion.connect((err)=>{
    if (err) {
        console.log('ha ocurrido un error'+ err)
    } else {
        console.log('la base de datos se conecto')
    }
});

module.exports = conexion;