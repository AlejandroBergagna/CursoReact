import './Logo.css'
import logo11 from './logo11.png'

import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to='/'>    <img src={logo11} className="estilo-logo"/> </Link>
    )
}

export default Logo;