import React from "react";
import { useEffect, useState } from "react";
import { obtenerProductos, obtenerUsuario } from "../helpers/queries";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import ItemProducto from "../views/producto/ItemProducto";

const Perfil = ({ usuarioLogueado }) => {
  const { id } = usuarioLogueado;

  const [usuario, setUsuario] = useState(null);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerUsuario(id).then((respuesta) => {
      setUsuario(respuesta);
    });

    // Obtener solo los productos del usuario actual
    obtenerProductos().then((respuesta) => {
      const productosUsuario = respuesta.filter(
        (producto) => producto.usuarioId === id
      );
      setProductos(productosUsuario);
    });
  }, [id]);

  if (!usuario) {
    return <p>Cargando...</p>;
  }

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Mis causas</h1>
        <Link className="btn btn-primary" to="/perfil/crear">
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
        {productos.map((producto) => (
            <ItemProducto
              key={producto.id}
              producto={producto}
              setProductos={setProductos}
            ></ItemProducto>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Perfil;
