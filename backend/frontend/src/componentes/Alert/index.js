import React from "react";
export default function Alert({ error, mensajeError }) {
  return (
    <div>
      {error ? (
        <div className="container">
          <div className="alert alert-warning" role="alert">
            {mensajeError}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
