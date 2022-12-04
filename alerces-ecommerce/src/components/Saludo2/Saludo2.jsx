import { useState } from "react";
import { useEffect } from "react";
import SaludoView from "../saludo/SaludoView";

export default function Saludo2() {
    const [person, setPerson] = useState(".....");
    const [cambio, setCambio] = useState("...");

    console.log("Este es un render del componente con estado:", person);

    useEffect(()=>{
        console.log("El componente ya fue montado");
    }, []);

    useEffect(()=>{
        console.log("Se modificó el valor del estado:", cambio);
    }, [cambio]);


    const onChangeHandler = (event)=>{
        const name = event.target.value;
        setPerson(name);
    };

    return (
        <div>
            <SaludoView personName={person} />
        
            <input 
                type="text" 
                onChange={onChangeHandler}
                placeholder="Ingrese Nombre"

            />
        </div>
    );

};