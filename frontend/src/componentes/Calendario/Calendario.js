import React, { useState,useEffect } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import getRegistros from "../../services/getRegistros";
import ResultadosEnLista from "../Tabla";
import "react-day-picker/lib/style.css";
import "./style.css";
const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const WEEKDAYS_LONG = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
const WEEKDAYS_SHORT = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const Calendario = () => {
  const [numberOfMonths] = useState(1);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [registrosList, setRegistrosList] = useState([]);

  const fetchData = async (from,to) => {
    const response = await getRegistros({ from, to });
    setRegistrosList(response);

  };
  const handleResetClick = () => {
    return setFrom(undefined) && setTo(undefined) && setRegistrosList([]);
  };
  const handleDayClick = (day) => {
    const rango = DateUtils.addDayToRange(day, { from, to });
    setFrom(rango.from);
    setTo(rango.to);
    
    
  };
  const modifiers = { start: from, end: to };
  useEffect(()=>{
    fetchData(from,to)

  },[from,to])
  return (
    <div className="row d-flex">
      <div className="col-3">
        <div className="card">
          <div className="card-header">Condiciones climáticas</div>
          <div className="card-body">
            <div className="RangeExample">
              <p>
                {!from && !to && "Por favor seleccione una fecha"}
                {from && !to && "Seleccione otra fecha"}
                {from &&
                  to &&
                  `Seleccionó desde ${from.toLocaleDateString()} hasta
                                        ${to.toLocaleDateString()}`}{" "}
                {from && to && (
                  <button className="link" onClick={handleResetClick}>
                    Borrar
                  </button>
                )}
              </p>
              <DayPicker
                className="Selectable"
                numberOfMonths={numberOfMonths}
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                onDayClick={handleDayClick}
                months={MONTHS}
                weekdaysLong={WEEKDAYS_LONG}
                weekdaysShort={WEEKDAYS_SHORT}
                locale="es"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-9">
        {(registrosList)? <ResultadosEnLista registrosList={registrosList}/>:""}
      </div>
    </div>
  );
};

export default Calendario;
