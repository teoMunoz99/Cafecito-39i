import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("usuario");
    setUsuarioLogueado({});
    navegacion("/");
  };

  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Cafecito
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-item nav-link" to={"/"}>
              Inicio
            </NavLink>
            {!usuarioLogueado.email && (
              <NavLink end className="nav-item nav-link" to={"/registro"}>
                Registro
              </NavLink>
            )}
            {usuarioLogueado.email && usuarioLogueado.rol === "admin" && (
              <>
                <NavLink
                  end
                  className="nav-item nav-link"
                  to={"/administrador"}
                >
                  Administrador
                </NavLink>
                <Button variant="dark" onClick={logout}>
                  Logout
                </Button>
              </>
            )}
            {!usuarioLogueado.email && (
              <NavLink end className="nav-item nav-link" to={"/login"}>
                Login
              </NavLink>
            )}
            {usuarioLogueado.email && usuarioLogueado.rol === "normal" && (
              <>
                <NavLink end className="nav-item nav-link" to={"/perfil"}>
                  Mi perfil
                </NavLink>
                <Button variant="dark" onClick={logout}>
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
