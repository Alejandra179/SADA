
const url = "https://db-remaf.herokuapp.com/api/"
export default function  api(id) {
  fetch(`${url}${id}`)
    .then((res) => {
      if (!res.ok) throw new Error("Response is not ok");
      return res.json();
    })
    .then((response) => {
      console.log(response)
       return response
      
    })
  
}


