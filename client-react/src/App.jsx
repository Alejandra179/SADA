
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './context/AuthContext'
import './App.css'
import { MainRouter } from './routers/MainRouter'
import { Auth0Provider } from "@auth0/auth0-react";

function App() {

  const user = {
    username: 'alesan',
    password: '12345678',
    isLogged: true
  }


  return (
    <Auth0Provider domain='dev-mnux8sb6tvw2378a.us.auth0.com' clientId='ov2WZSJodT56fvtxoCjn94j2Km0IbsfF' redirectUri={window.location.origin}>
      <AuthContext.Provider value={{
        user
      }}>
      <MainRouter />
      </AuthContext.Provider>
    </Auth0Provider>
  )
}

export default App
