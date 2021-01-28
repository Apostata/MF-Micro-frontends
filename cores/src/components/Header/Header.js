import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props =>{
    return(
        <nav>
            <ol className="center-column">
                <li>
                    <NavLink to="/cores/cores">Cores</NavLink>
                </li>
                <li>
                    <NavLink to="/cores/setColor">Mudar Cor</NavLink>
                </li>
                <li>
                    <NavLink to="/cores/listColors">Lista de cores</NavLink>
                </li>
               
            </ol>
        </nav>
    )
};

export default Header;