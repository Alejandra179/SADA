/* import React from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import ResultadosEnLista from "../Tabla";
import getRegistros from "../../services/getRegistros";
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
export default class Calendario extends React.Component {
  static defaultProps = {
    numberOfMonths: 1,
  };

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = { 
      from: undefined, 
      to: undefined,
   };
  }

  getInitialState() {
    return {
      from: undefined, to: undefined
    };
  }
  componentDidMount(){
   const obtenerDatos = async()=>{
        const { from, to } = this.state;
        let registros = await getRegistros({from,to})
        this.setState({registrosList : registros})
    }
    obtenerDatos()

 }
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
   
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }
 componentDidUpdate(prevProps,prevState){
   console.log(prevProps);
   console.log(prevState);
   console.log("el estado de props ha cambiado")
 }
 getRegistros(range).then((res)=>
 this.setState({
   registrosList:res
 })
 

 ) 

  render() {
    const { from, to} = this.state;
  
    const modifiers = { start: from, end: to };
    return (
      <div className="row">
        <div className="col-3">
          <div className="card">
            <div className="card-header">Condiciones climáticas</div>
            <div className="card-body">
              <div className="RangeExample">
                <p>
                  {!from && !to && "Por favor selecciona el primer día"}
                  {from && !to && "Por favor selecciona el segundo día"}
                  {from &&
                    to &&
                    `Seleccionó desde ${from.toLocaleDateString()} hasta
                                        ${to.toLocaleDateString()}`}{" "}
                  {from && to && (
                    <button className="link" onClick={this.handleResetClick}>
                      Borrar
                    </button>
                  )}
                </p>
                <DayPicker
                  className="Selectable"
                  numberOfMonths={this.props.numberOfMonths}
                  selectedDays={[from, { from, to }]}
                  modifiers={modifiers}
                  onDayClick={this.handleDayClick}
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
          <ResultadosEnLista  />
        </div>
      </div>
    );
  }
}
 */