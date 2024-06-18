import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './login/login'; // Ajusta la ruta según la ubicación real de tu componente Login
import Home from './home/home'; // Ajusta la ruta según la ubicación real de tu componente Home
import NotFound from './NotFound'; // Ajusta la ruta según la ubicación real de tu componente NotFound

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            {/* Añade más rutas según sea necesario */}
            <Route path="*"><NotFound /></Route> {/* Página no encontrada */}
        </Switch>
    );
}

export default Routes;
