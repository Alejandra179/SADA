import { convertirFechaToGet } from "../helpers/index";


const getEndRegistros = async () => {
  let fecha = convertirFechaToGet(new Date());
  let res = await fetch(`/endRegistros/${fecha}`);
  let json = await res.json();
  return json;
};
export default getEndRegistros;
