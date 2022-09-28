
const url = "https://db-remaf.herokuapp.com/api/"

export default async function api(id) {
  return await fetch(`${url}${id}`)
    .then((res) => {
      if (!res.ok) throw new Error("Response is not ok");
      return res.json();
    })
    .then((response) => {
       return response
    })
  
}


