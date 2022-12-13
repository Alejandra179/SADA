import React  from 'react' 
import '../assets/js/main.js'
import '../assets/css/style.css' 
import MapEstaciones from '../components/MapEstaciones' 
import { useTheme } from '@mui/material/styles';
import Prueba from '../components/Prueba' 
import { Line } from "react-chartjs-2";

import Image from 'react-bootstrap/Image'
import {
  NavLink,
} from 'react-router-dom'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'
import iconImage from '../assets/img/logo_circle.png';
import iconLetras from '../assets/img/logo_letras.png';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
) 
import  Navbar  from '../components/Navbar'

import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import '@fontsource/roboto/400.css';
import TableEstaciones from '../components/TableEstaciones.jsx';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export const Inicio = () =>{ 
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  const theme = useTheme();
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  return (
    <>
      <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
    
      <Navbar />

      <Container maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }} >
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="secondary.primary"
          gutterBottom
          className=''
        >  
          Estaciones
        </Typography>
        <Typography variant="h5" align="center" color={theme.palette.text.primary} component="p">
   
          Ubicaciones
          
        </Typography>
      </Container>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
        <Grid container spacing={5} alignItems="flex-end">
          <Card elevation={3}>
   
                <CardContent>
                <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,

                    }}
                  >
                   <MapEstaciones />
                   </Box>                  
                </CardContent>
                
           </Card>
           <Card elevation={3}>
                <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        mb: 2,

                    }}
                    >
                    <TableEstaciones />
                    </Box>                  
                </CardContent>
                
                </Card>
          
     

        <Line data={data} />
       
        </Grid>  
    </Grid>
    </Container>

    <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={8}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    
                  }}
                >
                  <MapEstaciones />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    
                  }}
                >
                  <TableEstaciones />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <TableEstaciones />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      

    <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          
            <Grid item xs={6} sm={3} key={'Subtitulo'}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {'Subtitulo'}
              </Typography>
              <ul>
            
                  <li key={1}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {1}
                    </Link>
                  </li>
              
              </ul>
            </Grid>
  
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </React.Fragment>
    </>
  )
}