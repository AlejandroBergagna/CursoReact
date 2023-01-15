import './ProductsList.css'
import { NavLink } from 'react-router-dom';

export default function ProductsList(props){

    const {data: products} = props;
  

   
    return(
        <div className="product-list__container">

                {products.map((product) => (
                   
                   <div key = {product.id} className="card tamaCard">
                        <img src={product.data().img} className="card-img-top image-style" alt="..."/>
                        
                        <div className="card-body">
                        <h5 className="card-title">{product.data().name}</h5>
                        <p className="card-text">${product.data().price}</p>
                        <NavLink  to={'/details/' + product.id}
                        >
                            Ver detalles
                        </NavLink>
                        </div>
                    </div>
                ))}
  
        </div>

    )   
}