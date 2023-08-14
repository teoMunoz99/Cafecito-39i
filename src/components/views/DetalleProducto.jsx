import { Container, Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { obtenerProducto } from "../helpers/queries";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    obtenerProducto(id).then((respuesta) => {
      setProducto(respuesta);
    });
  }, [id]);

  if (!producto) {
    return <p>Cargando...</p>;
  }

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={producto.imagen}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{producto.nombreProducto}</Card.Title>
              <hr />
              <Card.Text>
                Combinación perfecta entre leche, choclate, café intenso y un
                toque de canela. Café con granos 100% de arábica brasileña. Todo
                en una capsula inteligente.
                <br />
                <br />
                <span className="text-danger fw-semibold ">
                  Categoria:
                </span>{" "}
                {producto.categoria}
                <br />
                <span className="text-danger fw-semibold ">Precio:</span>{" "}
                ${producto.precio}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
