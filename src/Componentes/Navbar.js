import carrito from "../imagenes/carrito.png";
import "../../src/Estilos.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "./ContextProveedor";

const Navbar = () => {
  const { itemsTiempoReal } = useContext(CartContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Inicio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/categorias" className="nav-link">
                Categorías
              </Link>
              <Link to="/cart">
                <button>
                  <div>
                    <img className="imgCarritoNavbar" src={carrito} alt="" />

                    {itemsTiempoReal > 0 ? (
                      <h3>Cantidad de items: {itemsTiempoReal}</h3>
                    ) : (
                      ""
                    )}
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
