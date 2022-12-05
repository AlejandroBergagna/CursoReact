import './Nav.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

function Nav(props){
    const { pages } = props;

    return (
        <nav className="nav">
            
            <Logo />
            
            <ul className="nav-bar">
                {pages.map((page) => (
                    <li key={`${page.id}`}>
                        <NavLink
                            to={page.id}
                            className={({ isActive }) => 
                            isActive ? "link is-active" : "link"
                            }
                        >
                            {page.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

                {/* <li>
                    <a href="">
                        Botellas
                    </a>
                </li>
                <li>
                    <a href="">
                        Barriles
                    </a>
                </li>
                <li>
                    <a href="">
                        Servicios
                    </a>
                </li> */}
            

            <CartWidget/>
        
        </nav>

    );
};

export default Nav;