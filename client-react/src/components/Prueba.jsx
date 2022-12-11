import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow'; 
import { useEffect,useState } from 'react';
import axios from 'axios'
 

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [datos,setDatos] = useState([])
  const url = "https://api-remaf.onrender.com"
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const apiGetMediciones = async () => {
     
    const resp = await axios.get(`${url}/api/1/2022-10-01/2022-12-01`)
    setDatos(resp.data)
    setDescriEstacion(resp.data[0].descri_estaciones);
  }
  useEffect(() => {
    apiGetMediciones();
  },[1])

  const formatearFecha=(f) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (new Date(f).toLocaleDateString('es-ES', options)).toUpperCase();
  }
 

  const columns = [
    { id: 'descri_estaciones', label: 'Estación', minWidth: 100 },
    { id: 'temperatura_sensores', label: 'Dirección', minWidth: 30 },
    { id: 'humedad_sensores', label: 'Humedad', minWidth: 30 },
    { id: 'precipitacion_sensores', label: 'Precipitación', minWidth: 30 },
    { id: 'direcc_viento_sensores', label: 'Dirección Viento', minWidth: 30 },
    { id: 'veloc_viento_sensores', label: 'Velocidad del Viento', minWidth: 30 },
    { id: 'date_estaciones', label: 'Fecha', minWidth: 60 },
  ];
  /*
  datos.map(dt => {
    return (
      <tr key={dt.}>
        <td>{dt.temperatura_sensores}</td>
        <td>{dt.humedad_sensores}</td>
        <td>{dt.precipitacion_sensores}</td>
        <td>{dt.direcc_viento_sensores}</td>
        <td>{dt.veloc_viento_sensores}</td>
        <td>{formatearFecha(dt.date_estaciones)}</td>
      </tr>
    );
  })
  */
  
  return (
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
  );
}