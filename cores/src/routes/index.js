import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routes';

export const Routes = props =>{
    const renderRoutes = ()=>{
        return routes.map((route, idx)=>{
            return(
                <Route 
                    key={idx} 
                    exact={route.exact} 
                    path={route.path}  
                    component={route.component}
                />
            );
        })
    }
    return(
        <Suspense fallback={<p>Loading...</p>} >
            <Switch>
                {renderRoutes()}
            </Switch>
        </Suspense>
    )
}


