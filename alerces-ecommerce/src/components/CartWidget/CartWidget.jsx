import './CartWidget.css'
import logocarrito from './logocarrito.png'

function CartWidget() {
    return (
        <a href="">
            <img src={logocarrito} className="estilo-carrito"/>
        </a>
    )
}

export default CartWidget;
