import "../../src/Estilos.css";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "./ContextProveedor";
import db from "../Componentes/FirebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";

const ContadorElementos = ({ setCantidadCarrito, data }) => {
  const { agregarProductoAlCarrito, tiempoReal } = useContext(CartContext);
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

  const [contador, setContador] = useState(1);

  const handleSuma = () => {
    productos.map((producto) => {
      if (contador < producto.stock) {
        setContador(contador + 1);
      }
    });
  };

  const handleResta = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    setCantidadCarrito(contador);
    agregarProductoAlCarrito({ ...data, cantidadCarrito: contador });
    tiempoReal();
  };

  return (
    <div className="contadorGral">
      <p className="contadorCuantosQueres">¿Cuántos querés?</p>
      <button className="btnContador" onClick={handleSuma}>
        +
      </button>
      <p className="contadorCuantosQueres2">{contador}</p>
      <button className="btnContador" onClick={handleResta}>
        -
      </button>
      <div>
        <button className="btnAgregarAlCarrito" onClick={onAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ContadorElementos;
