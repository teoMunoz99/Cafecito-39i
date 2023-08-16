import { Routes, Route } from "react-router-dom";
import Perfil from "../views/Perfil";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";

const RutasUsuarios = ({ usuarioLogueado }) => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Perfil usuarioLogueado={usuarioLogueado} />}
        ></Route>
        <Route
          exact
          path="/crear"
          element={<CrearProducto usuarioLogueado={usuarioLogueado}></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasUsuarios;
