const ENDPOINT = "http://localhost:4000";

const getEndRegistros = async () => {
  let res = await fetch(ENDPOINT);
  let json = await res.json();
  return json;
};
export default getEndRegistros;
