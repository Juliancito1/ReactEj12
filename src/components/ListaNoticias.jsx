import { ListGroup } from "react-bootstrap";
import Cardnoticia from "./Cardnoticia";

const ListaNoticias = ({ noticias }) => {
  return (
    <section className="my-4">
      <Cardnoticia noticias={noticias}></Cardnoticia>
    </section>
  );
};

export default ListaNoticias;
