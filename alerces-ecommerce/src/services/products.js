const PRODUCTS_LIST = [
        {
            id : 1,
            name : "Botella Litro",
            price : 600,
        },
        {
            id : 2,
            name : "Botella 500 cc",
            price : 400,
        },
        {
            id : 3,
            name : "Botella 330 cc",
            price : 300,
        },
];

export function GetProducts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(PRODUCTS_LIST);
        }, 3500);
    });
}