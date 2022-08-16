import { createContext, useState } from "react";

const CartContext = createContext();

const ContextProveedor = ({ children }) => {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [itemsTiempoReal, setItemsTiempoReal] = useState(0);

  const vaciarCarrito = () => {
    setProductosCarrito([]);
    setItemsTiempoReal(0)
  };

  const agregarProductoAlCarrito = (producto) => {
    setProductosCarrito((productosCarrito) => [...productosCarrito, producto]);
  };

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = productosCarrito.filter(
      (producto) => producto.id !== id
    );
    setProductosCarrito(nuevoCarrito);
  };

  const tiempoReal = () => {
    setItemsTiempoReal(itemsTiempoReal + 1)
  };

  const data = {
    productosCarrito,
    setProductosCarrito,
    agregarProductoAlCarrito,
    vaciarCarrito,
    eliminarDelCarrito,
    tiempoReal,
    setItemsTiempoReal,
    itemsTiempoReal,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default ContextProveedor;
export { CartContext };
