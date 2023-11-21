import { useFetch } from "../../../hooks/useFetch";
import CardModal from "../../CardModal/CardModal";
import "./Work.scss";

function Work() {
  const { data, loading, error } = useFetch(
    "https://portafolio-rcs-default-rtdb.firebaseio.com/portafolio.json"
  );
  return (
    <section id="work" className="sec-work">
      <div className="cont-sec height100">
        <h1 className="ti-principal">Portafolio</h1>

        <div className="group-card">
          {data?.map((item) => (
            <CardModal key={item.id} titulo={item.titulo} img={item.img} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Work };
