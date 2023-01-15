import './CartWidget.css'
import logocarrito from './logocarrito.png'
import { Link } from 'react-router-dom';

function CartWidget() {
  
    return (
  
        <Link to='/cart'>    <img src={logocarrito} className="estilo-carrito"/> </Link>
            )
}

export default CartWidget;
