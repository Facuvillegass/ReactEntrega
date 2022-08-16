import "../../src/Estilos.css";
import { useState, useEffect } from "react";
import productosRopa from "../Componentes/Productos.json";
import { useContext } from "react";
import { CartContext } from "./ContextProveedor";

const ContadorElementos = ({ setCantidadCarrito, data, cantidadCarrito }) => {
  const {
    agregarProductoAlCarrito,
    tiempoReal,
    setItemsTiempoReal,
    itemsTiempoReal,
  } = useContext(CartContext);

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

  const onAdd = () => {
    setCantidadCarrito(contador);
    agregarProductoAlCarrito({ ...data, cantidadCarrito: contador });
    tiempoReal();
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
        <button className="btnAgregarAlCarrito" onClick={onAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ContadorElementos;
