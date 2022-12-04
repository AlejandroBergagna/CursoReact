import { useEffect, useState } from "react";
import ProductsList from "../ProductsList/ProductsList";
import { GetProducts } from "../../services/products";

export default function ItemListContainer(){
    
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        GetProducts()
            .then((prod) => setProducts(prod))
            .catch((error)=>{
                console.error('[Products Service] error - ', error);
                setProducts([]);
            })


    },[]);

    const isProductsEmpty = products.length == 0;

    return(
        <div className="products__Container">
            {isProductsEmpty ? (
                <span className="loading-products">Loading Products...</span>
            ) : (

                <ProductsList data={products} />
            )}

        </div>
    )
}

// function ItemListContainer(props) {
//     const {greetings} = props;
//     return (
//         <h1 className="list-container">{greetings}</h1>
//     )
// }

// export default ItemListContainer;
