import { Card, Button, Col, Row } from "react-bootstrap";

const Cardnoticia = ({ noticias }) => {
  return (
    <section className="container">
      <Row className="my-2">
        {noticias.map((noticia, indice) => (
          <Col md={4} lg={3} key={indice}>
            <Card className="my-3">
              <Card.Img
                variant="top"
                src={noticia.image_url}
                alt="imagen noticia"
              />
              <Card.Body>
                <Card.Title>{noticia.title}</Card.Title>
                <Card.Text className="text-truncate">
                  {noticia.description}
                </Card.Text>
                <Button variant="primary" className="disabled">
                  Ver Noticia Completa
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Cardnoticia;
