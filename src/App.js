import './App.css';
import { LoginProvider } from './context/LoginContext';
import { CartProvider } from './context/CartContext';
import { AppRouter } from './router/AppRouter';



function App() {


  return (
    <div className="App">
      <LoginProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
