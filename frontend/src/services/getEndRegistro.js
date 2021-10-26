import { convertirFechaToGet } from "../helpers/index";
const ENDPOINT = "http://localhost:4000";

const getEndRegistros = async () => {
  let fecha = convertirFechaToGet(new Date());
  let res = await fetch(`${ENDPOINT}/endRegistros/${fecha}`);
  let json = await res.json();
  return json;
};
export default getEndRegistros;
