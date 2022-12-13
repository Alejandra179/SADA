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
      <AppBar
        position="static"
        color="info"
        elevation={10}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` ,
        backgroundColor:  theme.palette.success.light}}
      >
      
      <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Avatar
            alt="Remy Sharp"
            src={iconImage}
            sx={{ width: 100, height: 100 }}
          />  
           <Image  src = {iconLetras}   />
        
           
            <Button color="inherit">Login</Button>
            <Button color="inherit"><NavLink to="/estaciones" className="nav-link scrollto active"><i  className="bx bx-home"></i> <span>Estaciones</span></NavLink></Button>
            <Button color="inherit">Login</Button>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>    

      <Container maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }} >
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="secondary.primary"
          gutterBottom
          className=''
        >  
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color={theme.palette.text.primary} component="p">
   
          Estaciones
          
        </Typography>
      </Container>
      <Container maxWidth="lg" component="main">
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
     

        <Line data={data} />
       
          
    </Grid>
    </Container>



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