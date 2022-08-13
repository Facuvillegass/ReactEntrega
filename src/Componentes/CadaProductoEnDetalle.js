import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productosRopa from "../Componentes/Productos.json";
import ContadorElementos from "./ContadorElementos";
import "./CadaProductoEnDetalle.css"

const CadaProductoEnDetalle = ({dataProducto}) => {
  const { productoId } = useParams();
  const [producto,setProducto] = useState({})

  useEffect(() => {
    (productosRopa.some((producto)=> {
      if (producto.id == productoId){
        setProducto(producto)
      }
    }))
  }, []);



  return (
    <div>
      <div className="productoDetalle">
        <h1>{producto.nombre}</h1>
        <img src={producto.imagen} />
        <h3>{producto.descripcion}</h3>
        <h4>${producto.precio}</h4>
      </div>
      <div className="contadorEnDetalle">
      <ContadorElementos />
      </div>
    </div>
  );
};

export default CadaProductoEnDetalle;
