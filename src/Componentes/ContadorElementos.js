import "../../src/Estilos.css";
import { useState, useEffect } from "react";
import productosRopa from "../Componentes/Productos.json";

const ContadorElementos = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    setProductos(productosRopa);
  }, []);

  const [contador, setContador] = useState(1);

  const handleSuma = () => {
    productos.map((producto) => {
      if (contador < producto.stock) {
        setContador(contador + 1);
      }
    });
  };

  const handleResta = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="contadorGral">
      <p className="contadorCuantosQueres">¿Cuántos querés?</p>
      <button className="btnContador" onClick={handleSuma}>
        +
      </button>
      <p className="contadorCuantosQueres2">{contador}</p>
      <button className="btnContador" onClick={handleResta}>
        -
      </button>
      <div>
        <button className="btnAgregarAlCarrito">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ContadorElementos;
