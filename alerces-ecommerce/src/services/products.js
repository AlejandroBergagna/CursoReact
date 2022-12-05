
const PRODUCTS_LIST = [
        {
            id : 1,
            category : "bot",
            name : "Botella Litro",
            price : 600,
        },
        
        {
            id : 2,
            category : "bot",
            name : "Botella 500 cc",
            price : 400,
        },
        {
            id : 3,
            category : "bot",
            name : "Botella 330 cc",
            price : 300,
        },
        
        {
            id : 4,
            category : "bar",
            name : "Barril x 9 lts",
            price : 3500,
            img : "./logo11.png"
        },
        {
            id : 5,
            category : "bar",
            name : "Barril x 20 lts",
            price : 3500,
            img : "./logo11.png"
        },
        {
            id : 6,
            category : "bar",
            name : "Barril x 30 lts",
            price : 3500,
            img : "./logo11.png"
        },
        {
            id : 7,
            category : "bar",
            name : "Barril x 50 lts",
            price : 3500,
            img : "./logo11.png"
        },

];

export function GetProducts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(PRODUCTS_LIST);
        }, 3500);
    });
}