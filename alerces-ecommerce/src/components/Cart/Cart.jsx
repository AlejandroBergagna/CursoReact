import Context from "../Context/Context";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import './Cart.css'

export default function Cart(){

       
    const { store, dispatch } = useContext(Context);
    const { cartOrders } = store;

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const customerFormRef = useRef(undefined);
    const phoneFormRef = useRef(undefined);
    const emailFormRef = useRef(undefined);

    
    if (cartOrders.length==0 || !cartOrders[cartOrders.length-1].isActive || cartOrders[cartOrders.length-1].products.length == 0){
        return (<span>El carrito está vacío</span>)
    }

    function onClickHandler(id) {

    
            dispatch({
                type: 'REMOVE-CART', 
                payload: {
                    id: id
         
                }
            });
        
        }

        const onClickRemoveAllHandler = () =>{
            dispatch({
                type:"REMOVE-ALL"
            })
        }

        const addOrderToOrdersCollection = ({ customer }) => {
            let activeOrder = cartOrders[cartOrders.length - 1];
        
            activeOrder = Object.assign(activeOrder, { customer });
        
            const ordersRef = collection(database, "ordenes-de-compra");
        
            addDoc(ordersRef, activeOrder).then(({ id }) =>
              console.log("Compra confirmada!", id)
            );
          };

        const onClickPurchaseOrderHandler = (event) => {
            event.preventDefault();
            const customer = customerFormRef.current.value;
            const customerPhone = phoneFormRef.current.value;
            const customerEmail = emailFormRef.current.value;
        
            if (!customer) {
              return setError("Your order should have a customer");
            }
        
            if (!customerPhone) {
              return setError("Your have to indicate some phone number to contact you");
            }
        
            if (!customerEmail) {
              return setError("Your have to indicate some email");
            }
        
            customerFormRef.current.value = "";
            phoneFormRef.current.value = "";
            emailFormRef.current.value = "";
        
            dispatch({
              type: "PURCHASE-ORDER",
              payload: {
                name: customer,
                phone: customerPhone,
                email: customerEmail,
              },
            });
        
            const customerData = {
              name: customer,
              phone: customerPhone,
              email: customerEmail,
            };
        
            addOrderToOrdersCollection({ customer: customerData });
        
            setError("");
          };
        
    

    
    
    return(
        
        


        <div className="">
        
        <form
        onSubmit={onClickPurchaseOrderHandler}
        className="formulario"
      >
        <div className="">
          <label htmlFor="customer">Nombre=</label>
          <input
            name="customer"
            type="text"
            placeholder=""
            ref={customerFormRef}
          />
        </div>
        <div className="">
          <label htmlFor="phone">Telefono=</label>
          <input
            name="phone"
            type="tel"
            placeholder=""
            ref={phoneFormRef}
          />
        </div>
        <div className="">
          <label htmlFor="email">Email=</label>
          <input
            name="email"
            type="email"
            placeholder=""
            ref={emailFormRef}
          />
        </div>
      </form>
      {error && (
        <div className="">
          <span className="error-message">{error}</span>
        </div>
      )}
        
        
        <div className="carrito titulo">
                        <p>IMAGEN</p>
                        {/* <div className=""> */}
                        <h5 className="">NOMBRE</h5>
                        <p className="">PRECIO UNITARIO</p>
                        <p className="">CANTIDAD</p>
                        <p className="">SUBTOTAL</p>
                        <button className="btn btn-danger"
                        onClick={onClickRemoveAllHandler}
                        >Borrar todo
                        </button>
                        {/* </div> */}
                </div>


        {cartOrders[cartOrders.length-1].products.map((product) => (
                   
             
         
                 <div key = {product.id} className="carrito">
                        <img src={product.img} className="img" alt="..."/>
                        {/* <div className=""> */}
                        <h5 className="">{product.name}</h5>
                        <p className="">${product.price}</p>
                        <p className="">{product.quantity}</p>
                        <p className="">${product.price * product.quantity}</p>
                        <button className="btn btn-danger btn-sm boton"
                        onClick={()=>onClickHandler(product.id)}
                        >Quitar Item
                        </button>
                        {/* </div> */}
                </div>


                //  <div key = {product.id} className="card tamaCard">
                //         <img src={product.img} className="card-img-top image-style" alt="..."/>
                //         <div className="card-body">
                //         <h5 className="card-title">{product.name}</h5>
                //         <p className="card-text">${product.price}</p>
                //         <p className="card-text">{product.quantity}</p>
                //         <p className="card-text">${product.price * product.quantity}</p>
                //         <button
                //         onClick={()=>onClickHandler(product.id)}
                //         >Remove Item
                //         </button>
                //         </div>
                //     </div>
               
               
               ))}


            <p>TOTAL: {cartOrders[cartOrders.length-1].amount}</p>
        
            <button className="btn btn-primary btn-sm"
        onClick={onClickPurchaseOrderHandler}
        type="submit"
        
      >Comprar</button>
            
        </div>  
    )

}