const apiCall = new Promise((resolve, reject) => {
    const response = true;
    if (response) {
        setTimeout(()=>resolve({name: 'ale', rol: 'estudiante'}),3000);
        

    }else{
        reject('ERROR');
    }
});

function responseAfterThreeSeconds(){

    apiCall
    .then(({name, rol}) => console.log(`El llamado a la API resulto: ${name} y ${rol}`))
    .catch((error) => console.error(`El llamado a la API dio ${error}`))

}


console.log("hola");
responseAfterThreeSeconds();

