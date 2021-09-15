const ENDPOINT = "http://localhost:4000";

export default function getRegistros({ fecha }) {
  return fetch(`${ENDPOINT}/${fecha}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      /* if(!res.ok) throw new Error('Response is not ok') */
      return res.json();
    })
    .then((response) => {
      return response;
    });
}
