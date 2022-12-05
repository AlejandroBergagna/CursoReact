
const PRODUCTS_LIST = [
        {
            id : 1,
            category : "botellas",
            name : "Botella Litro",
            price : 600,
        },
        
        {
            id : 2,
            category : "botellas",
            name : "Botella 500 cc",
            price : 400,
        },
        {
            id : 3,
            category : "botellas",
            name : "Botella 330 cc",
            price : 300,
        },
        
        {
            id : 4,
            category : "barriles",
            name : "Barril x 9 lts",
            price : 3500,
            img : "./logo11.png"
        },
        {
            id : 5,
            category : "barriles",
            name : "Barril x 20 lts",
            price : 3500,
            img : "./logo11.png"
        },
        {
            id : 6,
            category : "barriles",
            name : "Barril x 30 lts",
            price : 3500,
            img : "./logo11.png"
        },
        {
            id : 7,
            category : "barriles",
            name : "Barril x 50 lts",
            price : 3500,
            img : "./logo11.png"
        },

];

export function GetProducts(category){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (category === undefined){
                resolve(PRODUCTS_LIST);
            }else{
                const PRODUCTS = PRODUCTS_LIST.filter(prod => prod.category === category);
                resolve(PRODUCTS);
            }
        }, 3500);
    });
}