import { Routes, Route } from "react-router-dom";
import Inicio from "../views/Inicio";
import Perfil from "../views/Perfil";

const RutasUsuarios = () => {
  return (
    <>
      <Routes>
        <Route 
          exact 
          path="/" 
          element={<Perfil></Perfil>}>
        </Route>
      </Routes>
    </>
  );
};

export default RutasUsuarios;
