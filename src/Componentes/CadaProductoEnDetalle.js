import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import productosRopa from "../Componentes/Productos.json";
import ContadorElementos from "./ContadorElementos";
import "./CadaProductoEnDetalle.css";

const CadaProductoEnDetalle = ({ dataProducto }) => {
  const { productoId } = useParams();
  const [producto, setProducto] = useState({});
  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  useEffect(() => {
    productosRopa.some((producto) => {
      if (producto.id == productoId) {
        setProducto(producto);
      }
    });
  }, []);

  return (
    <div>
      <div className="productoDetalle">
        <h1>{producto.nombre}</h1>
        <img src={producto.imagen} />
        <h3>{producto.descripcion}</h3>
        <h4>${producto.precio}</h4>
      </div>
      <div className="contadorEnDetalle">
        {cantidadCarrito > 0 ? (
          <div className="textoCompraCarrito">
            <h2>
              ¡Genial! Has seleecionado {cantidadCarrito} {producto.nombre}
            </h2>
            <h3>
              El precio de esta operación será: $
              {producto.precio * cantidadCarrito}
            </h3>
            <Link to="/cart">
            <button>Terminar compra</button>
            </Link>
            <br />
          </div>
        ) : (
          <ContadorElementos setCantidadCarrito={setCantidadCarrito} />
        )}
      </div>
    </div>
  );
};

export default CadaProductoEnDetalle;
