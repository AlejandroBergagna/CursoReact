import { Routes, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import Cart from './components/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';

import Layout from './components/Layout/components/Layout';
import Provider from './components/Provider/Provider';

function App() {
  return (
    <div className="App">
     
      <Provider>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/home" element={<ItemListContainer />} />
          <Route path="/:category" element={<ItemListContainer />} />
          <Route path="/details/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          
          
        </Routes>
      </Layout>
      </Provider>
   
   
    </div>
  );
}

export default App;
