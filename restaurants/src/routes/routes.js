import {lazy} from 'react'

const Japones = lazy(()=>import('../components/Pages/Japones'))
const Italiano = lazy(()=>import('../components/Pages/Italiano'))


const routes = [
    {
        path: '/italiano',
        exact: true,
        component: Italiano,
       
    },
    {
        path: '/japones',
        exact: true,
        component: Japones,
    },
]

export default routes