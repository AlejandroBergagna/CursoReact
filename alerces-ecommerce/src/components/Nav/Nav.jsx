import './Nav.css';
import CartWidget from '../CartWidget/CartWidget';

function Nav(){
    return (
        <nav className="nav-bar">
            <ul className="nav-bar">
                <li>
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
                </li>
            </ul>

            <CartWidget/>
        
        </nav>

    );
};

export default Nav;