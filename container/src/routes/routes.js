
import { lazy } from 'react'

const Home = lazy(()=>import('../Pages/Home'))
const SetMeasures = lazy(()=>import('../Pages/SetMeasures'))

let routes = [
    {
        path: '/', //forca o carregamento do microfrontend Order se recarregar a página
        exact: true,
        name: 'Home',
        component: Home
    },
    {
        path: '/setMeasures', //forca o carregamento do microfrontend Order se recarregar a página
        exact: true,
        name: 'SetMeasures',
        component: SetMeasures
    },
]

try {
    const FontsRoutes = require('Fonts/routes').default
    routes = [...routes, ...FontsRoutes]
  } catch(e) {
    console.warn("Fonts/routes is not found");
}

try {
    const ColorsRoutes = require('Colors/routes').default
    routes = [...routes, ...ColorsRoutes]
  } catch(e) {
    console.warn("Color/routes is not found");
}


export default routes