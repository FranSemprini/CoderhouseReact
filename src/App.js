import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Categories } from './components/Categories/Categories';
import { CartProvider } from './context/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';




function App() {


  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <div className='app__container'>
            <Categories />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/categories/:categoryId' element={<ItemListContainer />} />
              <Route path='/cart' element={<CartContainer/>} />
              <Route path='*' element={<Navigate to="/" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
