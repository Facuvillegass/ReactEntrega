import "../../src/Estilos.css";
import { useEffect, useState } from "react";
import CadaProuctoEnHome from "./CadaProductoEnHome";
import { collection, getDocs } from "firebase/firestore";
import db from "../Componentes/FirebaseConfig.js";

const Home = () => {
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
      <div className="saludoInicialHome">
        <h1>¡Bienvenido!</h1>
        <h2>¡Estos son nuestros productos principales!</h2>
      </div>
      <div>
        {productos.map((producto) => {
          return <CadaProuctoEnHome key={producto.id} producto={producto} />;
        })}
      </div>
    </div>
  );
};

export default Home;
