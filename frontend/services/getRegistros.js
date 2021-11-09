import { convertirFecha } from "../helpers/index";


const buscarRegistros = async ({ from, to }) => {
  if (from && to) {
    let fechaStart = convertirFecha(from),
      fechaEnd = convertirFecha(to),
      res = await fetch(`/${fechaStart}&${fechaEnd}`),
      json = await res.json();
    return json;
  }
};
export default buscarRegistros;
