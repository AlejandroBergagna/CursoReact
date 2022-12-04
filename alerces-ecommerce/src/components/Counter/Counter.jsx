import { useState } from "react";

export default function Counter(){
    const [contador, setContador] = useState(0);

    const onClickReduceCounterHandler = () => {
        setContador(contador - 1);
    }

    const onClickAddCounterHandler = () => {
        setContador(contador + 1);
        
    }

    return (
        <div className="contador-container">
            <button onClick={onClickReduceCounterHandler}>-</button>
            <span>{contador}</span>
            <button onClick={onClickAddCounterHandler}>+</button>
        </div>
    )
}