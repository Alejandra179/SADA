import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios' 
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { Spinner } from 'react-bootstrap';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow'; 

export default function TableMediciones(props) {
  const [datos,setDatos] = useState([])
  const [descriEstacion,setDescriEstacion] = useState('')
  const [loading,setLoading] = useState(false)
  const url = "https://api-remaf.onrender.com"
  let fecha = new Date()
  let day = fecha.getDate()
  let month = fecha.getMonth() + 1
  let year = fecha.getFullYear()
  if(day<10){
    day=`0${day}`
  }
  if(month < 10){
     fecha =`-0${month}-${day}`;
  }else{
    fecha =`${year}-${month}-${day}`;
  }
  const [FDesde, setFDesde] = useState(fecha);
  const [FHasta, setFHasta] = useState(fecha);
  
  const apiGetMediciones = async () => {
    setLoading(true)
    const resp = await axios.get(`${url}/api/${props.estacionActual}/${FDesde}/${FHasta}`)
    setLoading(false)
    setDatos(resp.data)
    setDescriEstacion(resp.data[0].descri_estaciones);
  }
  useEffect(() => {
    apiGetMediciones();
    setFDesde(FDesde)
    setFHasta(FHasta)
  },[props.estacionActual])
  
  const formatearFecha=(f) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (new Date(f).toLocaleTimeString('es-ES', options)).toUpperCase();
  }
   
 
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
   
 

  const columns = [
    { id: 'descri_estaciones', label: 'Estación', minWidth: 100 },
    { id: 'temperatura_sensores', label: 'Dirección', minWidth: 30 },
    { id: 'humedad_sensores', label: 'Humedad', minWidth: 30 },
    { id: 'precipitacion_sensores', label: 'Precipitación', minWidth: 30 },
    { id: 'direcc_viento_sensores', label: 'Dirección Viento', minWidth: 30 },
    { id: 'veloc_viento_sensores', label: 'Velocidad del Viento', minWidth: 30 },
    { id: 'date_estaciones', label: 'Fecha', minWidth: 60 },
  ];

 return (
<section id="estaciones"  className="resume">
      <div  className="container">

        <div  className="section-title">
          <h2>Mediciones de {descriEstacion} </h2>
        </div>

        <div className="row ">
           <div className="col-md-3 text-inline">
            
            <Form.Group controlId="duedate">
                <Form.Label >Fecha Desde</Form.Label>
                <Form.Control 
                  type="date"
                  name="duedate"
                  value={FDesde}
                  onChange={(e) => setFDesde(e.target.value)}
                />
                <Form.Label  >Fecha Hasta </Form.Label>
                <Form.Control 
                  type="date"
                  name="duedate"
                  value={FHasta}
                  onChange={(e) => setFHasta(e.target.value)}
                />
                <br />  
              <Button variant="success" onClick={()=>apiGetMediciones()}>Buscar</Button>
            </Form.Group>
           </div>
          
        </div>
        <br />
        
        <div className='table-responsive-md'>

        
        
        
        <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
               
              <TableCell align="center" colSpan={7}>
                Mediciones
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {datos
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id  == 'date_estaciones'
                            ?  formatearFecha(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={datos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
      </div>
    </div>
       <br />
    </section>
  
);
}
