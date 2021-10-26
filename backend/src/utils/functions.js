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
  console.log(fecha)
  let arregloFecha = fecha.split("/");
  return new Date(`${arregloFecha[2]}-${arregloFecha[1]}-${arregloFecha[0]}`);
};

function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  console.log(bearerHeader);
}
//captura la hora cada 5
setInterval(hora, 30000);

module.exports = { fecha, hora, ensureToken, stringToDate };
