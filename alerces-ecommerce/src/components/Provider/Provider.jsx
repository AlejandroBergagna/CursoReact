import { useReducer } from "react";
import Context from "../Context/Context";
import store from "./store";
import reducer from "./reducer";


export default function Provider(props) {
    const { children } = props;
    const [myStore, dispatch] = useReducer(reducer, store);
    const value = { store : myStore, dispatch };

    return <Context.Provider value={value}>{children}</Context.Provider>;

}