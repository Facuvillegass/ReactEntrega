import "../../src/Estilos.css";
import productosRopa from "../Componentes/Productos.json";
import { useEffect, useState } from "react";
import CadaProuctoEnHome from "./CadaProductoEnHome";

const Home = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    setProductos(productosRopa);
  }, []);

  return (
    <div>
      <div className="saludoInicialHome">
        <h1>¡Bienvenido!</h1>
        <h2>¡Estos son nuestros productos principales!</h2>
      </div>
      <div>
        {productos.map((producto) => {
          return <CadaProuctoEnHome key={producto.id} producto={producto} />;
        })}
      </div>
    </div>
  );
};

export default Home;
