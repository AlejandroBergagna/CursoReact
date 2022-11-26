import logo from './logo.svg';
import './App.css';

import Button from './components/Button/Button';
import Nav from './components/Nav/Nav';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Nav />
      
      <ItemListContainer greetings="Cervecería Alerces les da la Bienvenida"></ItemListContainer>

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
