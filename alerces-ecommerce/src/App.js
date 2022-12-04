import logo from './logo.svg';
import './App.css';

import Button from './components/Button/Button';
import Nav from './components/Nav/Nav';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Saludo from './components/saludo/saludo';
//import Counter from './components/Counter/Counter';
//import Saludo2 from './components/Saludo2/Saludo2';

function App() {
  return (
    <div className="App">
      <Nav />
      
      <ItemListContainer greetings="Cervecería Alerces les da la Bienvenida" />


      {/* <Saludo /> */}

      {/* <Saludo2 />

      <Counter /> */}


      {/* <ItemListContainer>
        <p>Cerveza Artesanal Alerces</p>
      </ItemListContainer>
       */}
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
   
   
    </div>
  );
}

export default App;
