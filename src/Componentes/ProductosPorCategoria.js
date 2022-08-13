import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productosRopa from "../Componentes/Productos.json";
import Categorias from "./Categorias";
import ContadorElementos from "./ContadorElementos";

const ProductosPorCategoria = () => {
  const { categoria } = useParams();
  const [filtrarCategoria, setFiltrarCategoria] = useState([]);

  useEffect(() => {
    setFiltrarCategoria(productosRopa);
  }, []);

  return (
    <div>
      <Categorias/>
      {filtrarCategoria.map((producto) => {
        if (producto.categoria == categoria) {
          return (
            <div>
              <div className="productoDetalle">
                <h1>{producto.nombre}</h1>
                <img src={producto.imagen} />
                <h3>{producto.descripcion}</h3>
                <h4>${producto.precio}</h4>
              </div>
              <div className="contadorEnDetalle">
                <ContadorElementos/>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProductosPorCategoria;
