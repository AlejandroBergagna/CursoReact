import './ItemDetail.css'
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { database } from '../../firebase/config';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function ItemDetail(){
   
    const [ product, setProduct ] = useState(null);

    const [ productRef, setProductRef ] = useState(null);

    const [ quantity, setQuantity] = useState(1);

    const { id } = useParams();

    const onChangeHandler = (event)=>{
        const q = event.target.value;
        if (q <= product.stock){
            setQuantity(q);
        }else{
            setQuantity(product.stock);
        }
        
    };

    const onClickHandler = ()=>{
        if (product.stock < quantity){
            console.log("stock insuficiente");

        }else{
            updateDoc(productRef, {
                stock: product.stock - quantity
              });
        }
    

    }
    
    useEffect(() => {
        const productDocRef = doc(database, "items", id);
        setProductRef(productDocRef);
        

        getDoc(productDocRef).then((docSnapshot) => {
          let productDataById = docSnapshot.data();
          productDataById = Object.assign(productDataById, { id: docSnapshot.id });
          setProduct(productDataById);
        });
      }, [id]);


    

    return(
        <div className="centrar">

                   {product == null ? (
                    <span className="loading-products">Loading Products...</span>
                   ) : (
                   <div key = {product.id} className="card tamaCard centrar">
                        <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.price}</p>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">Stock: {product.stock}</p>
                        <button
                        onClick={onClickHandler}
                        >Add to Cart
                        </button>
                        
                        <input
                           type = "number"
                           min={1}
                           max={product.stock}
                           onChange={onChangeHandler}
                           value = {quantity}
                        />
                        </div>
                    </div>)
}
  
        </div>

    )   
}