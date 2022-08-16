import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productosRopa from "../Componentes/Productos.json";
import CadaProuctoEnHome from "../Componentes/CadaProductoEnHome.js";
import Categorias from "./Categorias";
import ContadorElementos from "./ContadorElementos";

const ProductosPorCategoria = ({ producto }) => {
  const { categoria } = useParams();
  const [filtrarCategoria, setFiltrarCategoria] = useState([]);
  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  useEffect(() => {
    setFiltrarCategoria(productosRopa);
  }, []);

  return (
    <div>
      <Categorias />
      {filtrarCategoria.map((producto) => {
        if (producto.categoria == categoria) {
          return (
            <div key={producto.id}>
              <div className="productoDetalle">
                <h1>{producto.nombre}</h1>
                <img src={producto.imagen} />
                <h3>{producto.descripcion}</h3>
                <h4>${producto.precio}</h4>
                <h4>Talle: {producto.talle}</h4>
              </div>
              {cantidadCarrito > 0 ? (
                <div className="textoCompraCarrito">
                  <h2>
                    ¡Genial! Has seleecionado {cantidadCarrito}{" "}
                    {producto.nombre}
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
                <ContadorElementos
                  setCantidadCarrito={setCantidadCarrito}
                  data={producto}
                />
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProductosPorCategoria;
