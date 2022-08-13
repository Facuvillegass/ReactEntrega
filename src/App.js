import "./App.css";
import Navbar from "./Componentes/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Componentes/Home";
import Categorias from "./Componentes/Categorias";
import Carrito from "./Componentes/Carrito";
import CadaProductoEnDetalle from "./Componentes/CadaProductoEnDetalle";
import ProductosPorCategoria from "./Componentes/ProductosPorCategoria";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias/>} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="/producto/:productoId" element={<CadaProductoEnDetalle/>}/>
          <Route path="/categoria/:categoria" element={<ProductosPorCategoria/>}/>
          <Route path="/*" element={<h1>Página no encontrada, error.</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;