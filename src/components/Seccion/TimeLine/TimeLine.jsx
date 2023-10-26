import { useFetch } from "/src/hooks/useFetch"
import { ItemTimeLine } from "./ItemTimeLine"

function TimeLine() {
  const {data, loading, error} = useFetch('https://portafolio-rcs-default-rtdb.firebaseio.com/trabajos.json');

  return (
    <section id="time-line" className="sec-time-line">
      <div className="cont-sec height100">
      <h1 className="ti-principal">Datos Laborales</h1>
      {error && <h2>Error: {error} </h2>}
      {loading && <h2>CARGANDO...</h2>}
      {data?.map((item) => (
        <ItemTimeLine
          key={item.id}
          titulo={item.titulo}
          detalle={item.detalle}
          fechaInicio={item.fechaInicio}
          fechaTermino={item.fechaTermino}
          empresa={item.empresa}
      />
      ))}
      
      </div>
  </section>
  )
}

export {TimeLine}