import { useEffect } from "react";



export default function SaludoView(props) {
    const { personName } = props;

    useEffect (()=>{
        console.log("Se termino de montar el componente SaludoView");
    
    }, [personName]);
    
    
    
    return (
        <p>Hola {personName}</p>
    )
}