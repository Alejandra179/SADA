const mongoose = require('mongoose');
const URI = process.env.ATLAS_URI
? process.env.ATLAS_URI: 'mongodb://localhost/databasetest';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('DB conectada')
})