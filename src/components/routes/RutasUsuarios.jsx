import { Routes, Route } from "react-router-dom";
import Inicio from "../views/Inicio";

const RutasUsuarios = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Inicio></Inicio>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasUsuarios;