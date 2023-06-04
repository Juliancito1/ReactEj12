import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
    const[noticias , setNoticias] = useState([])
    const[categoria, setCategoria] = useState('');
    useEffect(() => {
        if (noticias.length === 0) {
            consultarAPI();
          }
          setNoticias([])
    },[categoria])


    const consultarAPI = async () => {
        try {
            if(categoria !== ""){
                const respuesta = await fetch(`https://newsdata.io/api/1/news?apikey=pub_2386188cc0b2582136aefe10a1efcae0a03eb&category=${categoria}`)
                const dato = await respuesta.json()
                setNoticias(...noticias,dato.results)
                }
            }
        catch (error) {
        }    
    }

    return (
        <Container className="my-5 border border-3 border-black">
            <Form>
            <Form.Group className="my-3 justify-content-center d-flex border-bottom border-black border-1" controlId="formCategoria">
            <Form.Label className="d-inline fs-4">Buscar por Categoria: </Form.Label>
            <Form.Select className="d-inline w-50 ms-3 mb-4" aria-label="Categoria" onChange={(e) => setCategoria(e.target.value)} value={categoria}>
            <option value=''>Opciones</option>
            <option value="sports">Deportes</option>
            <option value="top">Top</option>
            <option value="business">Negocios</option>
            <option value="technology">Tecnologia</option>
            </Form.Select>
            </Form.Group>
            </Form>
            <ListaNoticias noticias={noticias}></ListaNoticias>
        </Container>
    );
};

export default Formulario;