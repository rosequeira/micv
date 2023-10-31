import { useFetch } from "../../../hooks/useFetch"
import { ListSkills } from "./ListSkills";

import './About.scss'

function About() {
  const {data, loading} = useFetch('https://portafolio-rcs-default-rtdb.firebaseio.com/habilidades.json');

  return (
  <section id="about" className="sec-about">
     <div className="cont-sec height100">
     <div className="cont-about">
        <h1 className="ti-principal"> Sobre mí</h1>
        <p>Soy un profesional orientado a logros en el trabajo, dispuesto a enfrentar nuevos desafíos en procesos que impliquen innovación. Poseo habilidad para trabajar en equipo y relacionarme con una diversidad de personas y grupos. Proactivo, reacciono con rapidez ante imprevistos. Cuento con una alta capacidad de comunicación, empatía y comprensión de las personas con que me relaciono.</p>

        <h2 className="ti-second">Habilidades</h2>

        <div className="cont-skills">
          {loading ? 
          (<h2>CARGANDO...</h2>) :
          (
            <>
              <ListSkills data={data?.frontEnd} titulo={'Front End'} />
              <ListSkills data={data?.software} titulo={'Software'} />
              <ListSkills data={data?.colaboracion} titulo={'Colaboración'} />
            </>
          )
          }

        </div>
        </div>
     </div>
   
    
    

  </section>
  )
}

export {About}