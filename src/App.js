import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import CartContextProvider from "./contextApi/CartContext";

function App() {
  return (
    <CartContextProvider>
    <div className="container mx-auto px-5">
     <Navbar/>
     <Product/>
    </div>
    </CartContextProvider>
  );
}

export default App;
