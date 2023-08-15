import { Navigate } from "react-router-dom";

const RutasProtegidasNormal = ({ children }) => {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario")) || null;
  if (usuarioLogueado.rol === "normal") {
    return children;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
};

export default RutasProtegidasNormal;
