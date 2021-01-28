import {lazy} from 'react'

const ChangeFont = lazy(()=>import('../components/Pages/ChangeFont'))
const ListFonts = lazy(()=>import('../components/Pages/ListFonts'))


const routes = [
    {
        path: '/listFonts',
        exact: true,
        component: ListFonts,
       
    },
    {
        path: '/changeFont',
        exact: true,
        component: ChangeFont,
    },
]

export default routes