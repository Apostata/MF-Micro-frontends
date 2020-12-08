
import { lazy } from 'react'

const Home = lazy(()=>import('../components/Pages/Home'))

const routes = [
    {
        path: '/', //forca o carregamento do microfrontend Order se recarregar a página
        exact: true,
        name: 'Home',
        component: Home
    },
]


export default routes