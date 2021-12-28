import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./Components/ItemListContainer/ItemDetailContainer/ItemDetailContainer";
import Cart  from './Components/Cart/Cart';
import Order from './Components/Order/Order';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes >
        <Route path="/" element={<ItemListContainer greeting="" />} />
        <Route path="category/:CategoryId" element={<ItemListContainer/>} />
        <Route path="Item/:id" element={<ItemDetailContainer />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Order" element={<Order />} />
      </Routes>
    </div>

  );
}

export default App;

