import { useState } from "react";
import SaludoView from "./SaludoView";
export default function Saludo(){

    const [person, setPerson] = useState(".......");

    const onChangeHandler = (event)=>{
        const name = event.target.value;
        setPerson(name);
        
    };

    return(
        <div>
        <SaludoView personName = {person} />
        <input
        type = "text"
        onChange={onChangeHandler}
        placeholder="Ingrese Nombre"

        />
        </div>

    )
}