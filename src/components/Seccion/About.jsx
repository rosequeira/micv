import { useFetch } from "../../hooks/useFetch"
import { ListSkills } from "./ListSkills";

import './About.scss'

function About() {
  const {data, loading} = useFetch('https://portafolio-rcs-default-rtdb.firebaseio.com/habilidades.json');

  return (
  <section id="about" className="sec-about">
     <div className="cont-sec height100">
     <div className="cont-about">
        <h1 className="ti-principal"> Mi trayectoria</h1>
        <p>Llevo más de 10 años trabajando en el área web. Mis inicios profesionales se centraban en la creación de wireframes y mockups. Con el tiempo, mi afán por seguir aprendiendo me llevó a crear maquetas en HTML, CSS, JS y JQuery. A lo largo de los años, he enriquecido mis conocimientos aprendiendo diversos frameworks (Angular, Vue, React, Bootstrap, scss, Typescript, SharePoint, StoryBook ), lo cual me ha permitido participar en varios proyectos importantes en diferentes compañías.</p>

        <h1>Habilidades</h1>

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