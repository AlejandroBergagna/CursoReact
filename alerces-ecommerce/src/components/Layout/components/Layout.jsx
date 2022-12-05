import Nav from "../../Nav/Nav";
import "./Layout.css";
import { PAGES } from "../../../utils/main-pages";

export default function Layout(props){
    const { children } = props;
    return(
        <div className="layout__container">
        <Nav pages={PAGES} />
        {children}
        </div>

    );
    
}