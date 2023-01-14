import { useEffect, useState } from "react";
import ProductsList from "../ProductsList/ProductsList";
// import { GetProducts } from "../../services/proucts";
import { useParams } from "react-router-dom";

import { database } from "../../firebase/config";
import { doc, getDoc, collection, getDocs, where, query } from "firebase/firestore"; 


export default function ItemListContainer(){
  


    const [products, setProducts] = useState([]);
    const { category } = useParams();


    useEffect(() => {
        const productsCollection = collection(database, 'items');
    
        let q;

        // console.log(productsCollection);
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

        // const q = query(
        //   productsCollection,
        //   where('category', '==', category)
        // );
    
        getDocs(q)
          .then((querySnapshot) => {
            // console.log(querySnapshot);

            const productList = querySnapshot.docs.map((doc) => doc);
            setProducts(productList);


          })



      }, [category])


    // useEffect (()=>{
    //     setProducts([]);
    //     GetProducts(category)
    //         .then((prod) => setProducts(prod))
    //         .catch((error)=>{
    //             console.error('[Products Service] error - ', error);
    //             setProducts([]);
    //         })
    // },[category]);
    
    // useEffect(()=>{
    
    //     GetProducts()
    //         .then((prod) => setProducts(prod));

    //     if (category === undefined)
    //     {
    //     GetProducts()
    //         .then((prod) => setProducts(prod));
    //     }else{
    //     GetProducts()
    //         .then(setProducts(products.filter(prod => prod.category === category)));

            
    //     }

    // }, [category]);
    

 
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
