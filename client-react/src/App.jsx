
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthContext } from './context/AuthContext'

import './App.css'
import { MainRouter } from './routers/MainRouter'

function App() {

  const user = {
    username: 'alesan',
    password: '12345678',
    isLogged: true
  }


  return (
    <AuthContext.Provider value={{
      user
    }}>
    <MainRouter />
    </AuthContext.Provider>
  )
}

export default App
