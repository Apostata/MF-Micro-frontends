import {lazy} from 'react'
const Buy =  lazy(()=>import('../components/Pages/Buy'));
const List =  lazy(()=>import('../components/Pages/List'));
const routes = [
    {
        path: '/orders/list',
        exact: true,
        component: List,
       
    },
    {
        path: '/orders/buy',
        exact: true,
        component: Buy,
    },
]

export default routes