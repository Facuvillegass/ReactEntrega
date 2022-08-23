import { useContext, useState } from "react";
import { CartContext } from "./ContextProveedor";
import "../Componentes/Carrito.css";
import { Link } from "react-router-dom";
import Home from "../Componentes/Home.js";
import FormModal from "./FormModal";

const Carrito = () => {
  const { productosCarrito, vaciarCarrito, eliminarDelCarrito } =
    useContext(CartContext);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
  });

  
  const [order, SetOrder] = useState({
    items: productosCarrito.map((producto) => {
      return {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
      };
    }),
    dataComprador: formData,
    total: 0,
  });

 

  const formChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  let suma = 0;
  productosCarrito.map((producto) => {
    const cadaProductoPrecio = producto.cantidadCarrito * producto.precio;
    console.log(cadaProductoPrecio);
    suma = suma + cadaProductoPrecio;
  });

  return (
    <div>
      <div>
        {console.log(order)}
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
              <h4>Descripción: {producto.descripcion}</h4>
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
          <br />
          <button onClick={() => setMostrarFormulario(true)}>
            Finalizar y pagar!
          </button>
          {mostrarFormulario && (
            <FormModal
              title="Form"
              btnModal={() => setMostrarFormulario(false)}
            >
              <form>
                <input
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={formChange}
                />
                <input
                  type="text"
                  placeholder="Ingrese su apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={formChange}
                />
                <input
                  type="number"
                  placeholder="Ingrese su teléfono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={formChange}
                />
                <button>Enviar info</button>
              </form>
            </FormModal>
          )}
        </div>
      )}
    </div>
  );
};

export default Carrito;
