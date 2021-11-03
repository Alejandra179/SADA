const fecha = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();
  return `${day}/${month}/${year}`;
};

const hora = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${hours}:${minutes}hs`;
  //modificar vista de hora, agregar un cero cuando los minutos sean menores a 10 y un 0 cuando la hora sea menor a 10
};

const stringToDate = (fecha) => {
  let arregloFecha = fecha.split("/");
  return new Date(`${arregloFecha[2]}-${arregloFecha[1]}-${arregloFecha[0]}`);
};

function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
 
}
//captura la hora cada 5
setInterval(hora, 30000);

const rangoDeFechas = () => {
  let fecha = new Date();
  let anio = fecha.getFullYear();
  let mes = fecha.getMonth() + 1;
  let dia = fecha.getDate();
  let rangoAnio = `${anio - 1},${mes},${dia}`;
  let rangoDia = `${anio},${mes},${dia - 1}`;
  mes === 1 ? (mes = 12) && (anio -= 1) : (mes -= 1);
  let rangoMes = `${anio},${mes},${dia}`;
  let hora = `${fecha.getHours()}:${fecha.getMinutes()}`;
  return { rangoMes, rangoAnio, rangoDia, hora };
};

module.exports = {
  fecha,
  hora,
  ensureToken,
  stringToDate,
  rangoDeFechas,
};
