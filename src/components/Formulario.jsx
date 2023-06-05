import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [pais, setPais] = useState("");
  useEffect(() => {
    consultarAPI();
  }, [categoria, pais]);

  const consultarAPI = async () => {
    try {
      if (categoria !== "" && pais !== "") {
        const respuesta = await fetch(
          `https://newsdata.io/api/1/news?apikey=pub_2386188cc0b2582136aefe10a1efcae0a03eb&category=${categoria}&country=${pais}`
        );
        const dato = await respuesta.json();
        setNoticias(dato.results);
      }
    } catch (error) {}
  };

  return (
    <Container className="my-5 border border-3 border-black">
      <Form>
        <Form.Group
          className="my-3 justify-content-center d-flex"
          controlId="formCategoria"
        >
          <Form.Label className="d-inline fs-4">
            Buscar por Categoria:{" "}
          </Form.Label>
          <Form.Select
            className="d-inline w-50 ms-3 mb-4"
            aria-label="Categoria"
            onChange={(e) => setCategoria(e.target.value)}
            value={categoria}
          >
            <option value="">Opciones</option>
            <option value="sports">Deportes</option>
            <option value="top">Top</option>
            <option value="business">Negocios</option>
            <option value="technology">Tecnologia</option>
          </Form.Select>
        </Form.Group>
        <Form.Group
          className="my-3 justify-content-center d-flex border-bottom border-black border-1"
          controlId="formPais"
        >
          <Form.Label className="d-inline fs-4">
            Seleccionar el pais:{" "}
          </Form.Label>
          <Form.Select
            className="d-inline w-50 ms-3 mb-4"
            aria-label="pais"
            onChange={(e) => setPais(e.target.value)}
            value={pais}
          >
            <option value="">Opciones</option>
            <option value="ar">Argentina</option>
            <option value="br">Brasil</option>
            <option value="es">España</option>
            <option value="us">Estados Unidos</option>
            <option value="gb">Inglaterra</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <ListaNoticias noticias={noticias}></ListaNoticias>
    </Container>
  );
};

export default Formulario;
