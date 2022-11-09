import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { LoginScreen, RegisterScreen } from '../pages/';
import { NotFound404 } from '../pages/NotFound404';
import { Home } from '../pages/Home';
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

                <Route path='/signup' element={
                    <PublicRoutes>
                        <RegisterScreen/>
                    </PublicRoutes>
                } />
                
                <Route path='/home' element={
                    <PublicRoutes>
                        <Home/>
                    </PublicRoutes>
                } />

                <Route path='/' element={
                    <PrivateRoutes>
                       <Home />
                    </PrivateRoutes>
                } />

                <Route path='/*' element={<NotFound404 />} />
            </Routes>
        </BrowserRouter>
    )
}
