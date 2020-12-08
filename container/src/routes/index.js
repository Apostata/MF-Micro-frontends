import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import localRoutes from './routes';

import RAppRoutes from 'RApp/routes'
import OAppRoutes from 'OApp/routes'

const routes = [...localRoutes, ...RAppRoutes, ...OAppRoutes]

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

