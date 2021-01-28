import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import localRoutes from './routes';

import FontsRoutes from 'Fonts/routes'
import ColorsRoutes from 'Colors/routes'

const routes = [...localRoutes, ...FontsRoutes, ...ColorsRoutes]
// const routes = [...localRoutes]

const Routes = props =>{
    
    const renderRoutes = ()=>{
        return routes.map((route, idx)=>{
            return(
                <Route 
                    key={idx} 
                    exact={route.exact} 
                    path={route.path}  
                    render={()=><route.component/>}
                />
            );
        })
    }
    return(
        <Suspense fallback={<p>Loading...</p>}>
            <Switch>
                {renderRoutes()}
            </Switch>
        </Suspense>
    )
}

export default Routes;

