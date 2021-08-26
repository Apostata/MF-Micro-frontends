import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';

const Header = props =>{
    return(
        <nav>
            <ul className="center-column">
                {routes.map((rota, idx)=>
                    (
                        <li key={`menu-${idx}`}>
                            <NavLink to={rota.path}>{rota.name}</NavLink>
                        </li>
                    )
                )}                
            </ul>
        </nav>
    )
};

export default Header;