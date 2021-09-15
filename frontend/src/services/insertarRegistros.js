const ENDPOINT = "http://localhost:4000";

export default function insertarRegistros({
  temperaturas,
  humedades,
  fechas,
  horas,
  precipitaciones,
  viento,
  
}) {
  console.log(temperaturas, humedades, fechas, horas,precipitaciones);
  return fetch(`${ENDPOINT}/new_registro`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ temperaturas, humedades, fechas, horas,viento,precipitaciones }),
  })
    .then((res) => {
      /* if(!res.ok) throw new Error('Response is not ok') */
      return res.json();
    })
    .then((response) => {
      return response;
    });
}
