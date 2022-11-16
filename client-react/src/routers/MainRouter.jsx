import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'; 
import { NotFound404 } from '../pages/NotFound404'; 
import { Docs } from '../pages/Docs';
import { EstacionesScreen } from '../pages/EstacionesScreen'; 
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const MainRouter = () => {
    return (
        <BrowserRouter>
            
            <Routes> 
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
