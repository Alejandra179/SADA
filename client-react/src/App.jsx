import { useState } from 'react'

import './App.css'

import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppProvider} from './context/appContext'
function App() {

  return (
      
    <div >

      <Home/>
    </div>
  )
}

export default App
