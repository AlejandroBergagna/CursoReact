import './ProductsList.css'

export default function ProductsList(props){

    const {data: products} = props;
    
    // const products = [
    //     {
    //         id : 1,
    //         name : "Botella Litro",
    //         price : 600,
    //     },
    //     {
    //         id : 2,
    //         name : "Botella 500 cc",
    //         price : 400,
    //     },
    //     {
    //         id : 3,
    //         name : "Botella 330 cc",
    //         price : 300,
    //     },
    // ];

    return(
        <div className="product-list__container">

                {products.map((product) => (
                   <div key = {product.id} className="card tamaCard">
                        <img src="" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.price}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                ))}
  
        </div>

    )   
}