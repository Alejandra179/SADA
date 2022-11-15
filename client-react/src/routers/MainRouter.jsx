import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { LoginScreen, RegisterScreen } from '../pages/';
import { NotFound404 } from '../pages/NotFound404';
import { Home } from '../pages/Home';
import { Docs } from '../pages/Docs';
import { EstacionesScreen } from '../pages/EstacionesScreen';
import { OtroEnrutador } from './OtroEnrutador';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const MainRouter = () => {
    return (
        <BrowserRouter>
            
            <Routes>

                <Route path='/signin' element={
                    <PublicRoutes>
                        <LoginScreen />
                    </PublicRoutes>
                } />
                <Route path='/estaciones' element={
                    <PublicRoutes>
                        <EstacionesScreen/>
                    </PublicRoutes>
                } />
                <Route path='/docs' element={
                    <PublicRoutes>
                        <Docs/>
                    </PublicRoutes>
                } />
                
                <Route path='/estaciones' element={
                    <PublicRoutes>
                        <EstacionesScreen/>
                    </PublicRoutes>
                } />
                <Route path='/docs' element={
                    <PrivateRoutes>
                        <Docs/>
                    </PrivateRoutes>
                } />
                

                <Route path='/' element={
                    <PrivateRoutes>
                       <Docs />
                    </PrivateRoutes>
                } />

                <Route path='/*' element={<NotFound404 />} />
            </Routes>
        </BrowserRouter>
    )
}
