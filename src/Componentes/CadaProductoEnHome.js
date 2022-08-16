import ContadorElementos from "./ContadorElementos";
import "../../src/Estilos.css";
import { Link } from "react-router-dom";
import { useState, useSyncExternalStore } from "react";
import ModalFormaDePago from "../Componentes/ModalFormaDePago.js";

const CadaProuctoEnHome = ({ producto }) => {
  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  const [loader, setLoader] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);

  const showModal = () => {
    setLoader(true);
    setTimeout(() => {
      setMostrarModal(!mostrarModal);
      setLoader(false);
    }, 2000);
  };

  return (
    <div>
      <div className={`cadaProductoEnHome ${mostrarModal ? "modalClass" : ""}`}>
        <h3 className="tituloCadaProductoEnHome">{producto.nombre}</h3>
        <h4 className="descripcionCadaProductoEnHome">
          {producto.descripcion}
          <br />
          <br />
          Talle: {producto.talle}
        </h4>
        <p></p>
        <img
          src={producto.imagen}
          alt={producto.imagen}
          className="imgCadaProductoEnHome"
          onClick={showModal}
        />
        {loader && <h1>Loading...</h1>}
        {mostrarModal && <ModalFormaDePago data={producto} />}
        <Link to={"/producto/" + producto.id}>
          <div>
            <p className="precioCadaProductoEnHome">
              Precio: ${producto.precio}
            </p>
            <button className="btnVerMas">Ver más</button>
          </div>
        </Link>

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
          <ContadorElementos
            setCantidadCarrito={setCantidadCarrito}
            data={producto}
          />
        )}
      </div>
    </div>
  );
};

export default CadaProuctoEnHome;
