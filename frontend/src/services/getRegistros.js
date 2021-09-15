import { convertirFecha } from "../helpers/functions";
const ENDPOINT = "http://localhost:4000";

export default function buscarRegistros({ from, to }) {
  if (!from) {
    let fechaStart = convertirFecha(new Date());
    let fechaEnd = fechaStart;
    return fetch(`${ENDPOINT}/${fechaStart}&${fechaEnd}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Response is not ok");
        return res.json();
      })
      .then((response) => {
        console.log(response);
        return response;
      });
  } else {
    if (!to) {
      let fechaStart = convertirFecha(from);
      let fechaEnd = fechaStart;
      return fetch(`${ENDPOINT}/${fechaStart}&${fechaEnd}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Response is not ok");
          return res.json();
        })
        .then((response) => {
          console.log(response);
          return response;
        });
    } else {
      let fechaStart = convertirFecha(from);
      let fechaEnd = convertirFecha(to);
      return fetch(`${ENDPOINT}/${fechaStart}&${fechaEnd}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Response is not ok");
          return res.json();
        })
        .then((response) => {
          console.log(response);
          return response;
        });
    }
  }
}
