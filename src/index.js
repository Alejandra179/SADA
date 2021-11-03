const app = require('./app');
require('./database');
const main = async() =>{
    await app.listen(app.get('port'))
    console.log('servidor corriendo en el puerto',app.get('port'));
    
}

main();