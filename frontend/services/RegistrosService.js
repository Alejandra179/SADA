import { convertirFechaToGet, convertirFecha } from "../helpers/index";

class RegistrosService {
  async getEndRegistros() {
    let fecha = convertirFechaToGet(new Date());
    let res = await fetch(`/endRegistros/${fecha}`);
    let json = await res.json();
    return json;
  }
  async buscarRegistros({ from, to }) {
    if (from && to) {
      let fechaStart = convertirFecha(from),
        fechaEnd = convertirFecha(to),
        res = await fetch(`/${fechaStart}&${fechaEnd}`),
        json = await res.json();
      return json;
    }
  }

  async insertarRegistros({
    jwt,
    temperaturas,
    humedades,
    fechas,
    horas,
    precipitaciones,
    viento,
  }) {
    let res = await fetch(`/importar-registros`, {
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
    });
    let json = await res.json();

    return json;
  }

  async login({ username, password }) {
    let response = await fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    let json = await response.json();
    if (json.message) {
      return json;
    } else {
      const { token } = response;
      return token;
    }
  }
}

export default RegistrosService
