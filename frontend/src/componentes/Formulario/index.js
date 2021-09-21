import React, { useState, useEffect } from "react";
import Alert from "../Alert";
import { useLocation } from "wouter";
import useUser from "../../hooks/useUser";
import loginService from '../../services/login'
import "./style.css";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser] = useState(null)
  const [, navigate] = useLocation();
  const { login, isLogged } = useUser();
  const [estado, setEstado] = useState({
    error: false,
    mensajeError: "",
  });

  useEffect(() => {
    (isLogged) ? navigate("/importar-archivos") : navigate("/login");
  }, [isLogged, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setEstado({
        error: true,
        mensajeError: "Todos los campos son obligatorios",
      });
    } else {
      let res = await loginService({ username, password });
      console.log(res);
      (res)
         ? setEstado({
            error: true,
            mensajeError: res,
          })
        : setEstado({
            error: false,
            mensajeError: "",
          });
    }
  };
  return (
    <div
      className="card text-dark mb-3 mt-5 ml-3 mx-auto"
      style={{ maxWidth: "25rem" }}
    >
      <div className="card-header">
        <strong>Iniciar Sesión</strong>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <Alert error={estado.error} mensajeError={estado.mensajeError} />
          <div className="container">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                className="form-control"
                onChange={({target}) => setUsername(target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={password}
                placeholder="Contraseña"
                className="form-control"
                onChange={({target}) => setPassword(target.value)}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-success" type="submit">
                Ingresar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
