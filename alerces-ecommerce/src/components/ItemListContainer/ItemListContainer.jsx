import { useEffect, useState } from "react";
import ProductsList from "../ProductsList/ProductsList";
import { useParams } from "react-router-dom";

import { database } from "../../firebase/config";
import { doc, getDoc, collection, getDocs, where, query } from "firebase/firestore"; 


export default function ItemListContainer(){
  


    const [products, setProducts] = useState([]);
    const { category } = useParams();


    useEffect(() => {
        const productsCollection = collection(database, 'items');
    
        let q;

        if (category == undefined) {
            q=query(
                productsCollection
            )
        }else{
            q = query(
                productsCollection,
                where('category', '==', category)
              );
        }

    
        getDocs(q)
          .then((querySnapshot) => {

            const productList = querySnapshot.docs.map((doc) => doc);
            setProducts(productList);


          })



      }, [category])

    

 
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

