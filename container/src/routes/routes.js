
import { lazy } from 'react'

const Home = lazy(()=>import('../Pages/Home'))
const SetMeasures = lazy(()=>import('../Pages/SetMeasures'))

const routes = [
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


export default routes