import { useContext} from "react";
import { CartContext } from "./ContextProveedor";
import "../Componentes/Carrito.css";
import { Link } from "react-router-dom";
import Home from "../Componentes/Home.js";

const Carrito = () => {
  const { productosCarrito, vaciarCarrito, eliminarDelCarrito } =
    useContext(CartContext);


  let suma = 0;
  productosCarrito.map((producto) => {
    const cadaProductoPrecio = producto.cantidadCarrito * producto.precio;
    suma = suma + cadaProductoPrecio;
  });


  return (
    <div>
      <div>
        {productosCarrito.length == 0 && (
          <div>
            <h2>¡Tu carrito aún está vacío!</h2>
            <Link to="/" element={<Home />}>
              <button>Volver la lista de productos</button>
            </Link>
          </div>
        )}
        {productosCarrito.map((producto) => {
          return (
            <div key={producto.id}>
              <h1>{producto.nombre}</h1>
              <h2>Precio: ${producto.precio}</h2>
              <img className="imgEnCarrito" src={producto.imagen} />
              <h3>Cantidad: {producto.cantidadCarrito}</h3>
              <button
                onClick={() => {
                  eliminarDelCarrito(producto.id);
                }}
              >
                Eliminar de mi carrito
              </button>
            </div>
          );
        })}
      </div>
      {productosCarrito.length > 0 && (
        <div>
          <h3>Precio total: ${suma}</h3>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default Carrito;
