
const url = "https://api-remaf.onrender.com/api/"
//https://api-remaf.onrender.com/api/estaciones
export default async function api() {
  return await fetch(`${url}`)
    .then((res) => {
      return res.json();
    })
}



