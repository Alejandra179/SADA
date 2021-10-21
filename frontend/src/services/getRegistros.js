import { convertirFecha } from "../helpers/index";
const ENDPOINT = "http://localhost:4000";

const buscarRegistros = async ({ from, to }) => {
  if (from && to) {
    let fechaStart = convertirFecha(from),
    fechaEnd = convertirFecha(to),
    res = await fetch(`${ENDPOINT}/${fechaStart}&${fechaEnd}`),
    json = await res.json()
    
    return json
     
  }
};
export default buscarRegistros;
