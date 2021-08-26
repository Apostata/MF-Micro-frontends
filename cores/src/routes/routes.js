import {lazy} from 'react'
const ChangeColor =  lazy(()=>import('../Pages/ChangeColor'));
const ListCorlor =  lazy(()=>import('../Pages/ListColor'));
const Cores =  lazy(()=>import('../Pages/Cores'));
const routes = [
    
    {
        path: '/cores/listColors',
        name:'Cores/listColors',
        exact: true,
        component: ListCorlor,
       
    },
    {
        path: '/cores/setColor',
        name: 'Cores/setColor',
        exact: true,
        component: ChangeColor,
    },
]

export default routes