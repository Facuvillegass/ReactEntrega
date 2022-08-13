import ContadorElementos from "./ContadorElementos"
import "../../src/Estilos.css"
import {Link} from "react-router-dom"

const CadaProuctoEnHome = ({producto}) => {
    return (
        <div>
             <div className="cadaProductoEnHome">
              <h3 className="tituloCadaProductoEnHome">{producto.nombre}</h3>
              <h4 className="descripcionCadaProductoEnHome">{producto.descripcion}</h4>
              <img src={producto.imagen} alt={producto.imagen} className="imgCadaProductoEnHome" />
              <Link to={"/producto/" + producto.id}>
              <div><p className="precioCadaProductoEnHome">Precio: ${producto.precio}</p>
              <button className="btnVerMas">Ver más</button></div>
              </Link>
              <ContadorElementos/>
            </div>
        </div>
    )
}

export default CadaProuctoEnHome