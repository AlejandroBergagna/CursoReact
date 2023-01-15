export default function reducer(store, action){

    const { type, payload } = action;

    switch (type) {
        case "ADD-CART":{

            let cartOrders = store.cartOrders;


            // Chequeo si hay órdenes de compra

            if (cartOrders.length == 0){
                const order = { products: [], isActive: true, amount: 0 }

                cartOrders.push(order);
            }

            // Cheque si hay órden de compra activa

            if (!cartOrders[cartOrders.length-1].isActive){
                const order = { products: [], isActive: true, amount: 0}

                cartOrders.push(order);

            }

            let activeOrder = cartOrders[cartOrders.length-1];
            
            let exist = false;


                cartOrders[cartOrders.length-1].products = activeOrder.products.map((product)=>{
                    if (product.id == payload.id){
                        product.quantity = parseInt(payload.quantity) + parseInt(product.quantity);
                        cartOrders[cartOrders.length-1].amount += payload.quantity * payload.price;
                        exist = true;
                    }
                    return product;

                });

          


            if (!exist){
                cartOrders[cartOrders.length-1].products.push(payload);
                cartOrders[cartOrders.length-1].amount += payload.quantity * payload.price;
            }


            return{cartOrders};

          


        }
        case "REMOVE-CART":{
        
     
            let cartOrders = store.cartOrders;

            let activeOrder = cartOrders[cartOrders.length-1];

            activeOrder.products = activeOrder.products.filter(
            (product) => product.id !== payload.id
            );

            activeOrder.amount = activeOrder.products.reduce((total, item) => total + item.amount * item.price,0)


            cartOrders[cartOrders.length-1] = activeOrder;

      return { cartOrders };

        }


        case "PURCHASE-ORDER": {
            
            let cartOrders = store.cartOrders;
      
            let activeOrder = cartOrders[cartOrders.length-1];
        
            activeOrder.buyer = payload;
         
            activeOrder.isActive = false;
      
            cartOrders[cartOrders.length-1] = activeOrder;
      
            return { cartOrders };
          }

          case "REMOVE-ALL": {
            
            let cartOrders = store.cartOrders;
      
            let activeOrder = cartOrders[cartOrders.length-1];
        
            activeOrder.products = [];
            activeOrder.amount = 0;
      
            cartOrders[cartOrders.length-1] = activeOrder;
      
            return { cartOrders };
          }
      

    }


}