import {Link} from "react-router-dom"
import "../../src/Estilos.css"

const Categorias = () => {
  return (
    <div className="categoriasStyles">
      <h2>¡Filtrá tus productos por categoría!</h2>
      <Link to="/categoria/remera">
      <button>¡Quiero ver remeras!</button>
      </Link>
      <Link to="/categoria/pantalon">
      <button>¡Quiero ver pantalones!</button>
      </Link>
      <Link to="/categoria/campera">
      <button>¡Quiero ver camperas!</button>
      </Link>
      <Link to="/categoria/zapatillas">
      <button>¡Quiero ver zapatillas!</button>
      </Link>
    </div>
  );
};

export default Categorias;
