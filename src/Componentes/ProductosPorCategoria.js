import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Categorias from "./Categorias";
import ContadorElementos from "./ContadorElementos";
import { collection, getDocs } from "firebase/firestore";
import db from "../Componentes/FirebaseConfig.js";

const ProductosPorCategoria = ({ producto }) => {
  const { categoria } = useParams();
  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  const [productos, setProductos] = useState([]);
  const getProducts = async () => {
    const productCollection = collection(db, "productos");
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((e) => {
      let product = e.data();
      product.id = e.id;
      return product;
    });
    return productList;
  };

  useEffect(() => {
    getProducts().then((res) => {
      setProductos(res);
    });
  }, []);


  return (
    <div>
      <Categorias />
      {productos.map((producto) => {
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
