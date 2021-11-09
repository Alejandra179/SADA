

export default function insertarRegistros({
  jwt,
  temperaturas,
  humedades,
  fechas,
  horas,
  precipitaciones,
  viento,
}) {
  return fetch(`/importar-registros`, {
    method: "POST",
    headers: {
      authentication: jwt,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      temperaturas,
      humedades,
      fechas,
      horas,
      viento,
      precipitaciones,
    }),
  })
    .then((res) => {
      /* if(!res.ok) throw new Error('Response is not ok') */
      return res.json();
    })
    .then((response) => {
      return response;
    });
}
