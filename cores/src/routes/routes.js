import {lazy} from 'react'
const ChangeColor =  lazy(()=>import('../Pages/ChangeColor'));
const ListCorlor =  lazy(()=>import('../Pages/ListColor'));
const Cores =  lazy(()=>import('../Pages/Cores'));
const routes = [
    {
        path: '/cores/cores',
        exact: true,
        component: Cores,
       
    },
    {
        path: '/cores/listColors',
        exact: true,
        component: ListCorlor,
       
    },
    {
        path: '/cores/setColor',
        exact: true,
        component: ChangeColor,
    },
]

export default routes