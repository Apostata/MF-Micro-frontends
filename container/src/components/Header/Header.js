import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props =>{
    return(
        <nav>
            <ul className="center-column">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/setMeasures">Alterar margens</NavLink>
                </li>
                <li>
                    <p>Cores</p>
                    <ul className="center-column">
                        <li>
                            <NavLink to="/cores/cores">cores</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cores/listColors">Lista de cores</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cores/setColor">Mudar cor</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>Fontes</p>
                    <ul className="center-column">
                        <li>
                            <NavLink to="/listFonts">Lista de fontes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/changeFont">Mudar Fonte</NavLink>
                        </li>
                    </ul>
                </li>
               
            </ul>
        </nav>
    )
};

export default Header;