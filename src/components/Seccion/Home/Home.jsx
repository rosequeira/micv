import imgPoratada from '/src/assets/mobile-portada.png';
import './Home.scss'
import '../Seccion.scss'

function Home() {
  return (
    <section id="home" className="Home-sec">
      <div className="cont-sec height100">
      
      <div className="img-portada">
        <img src={imgPoratada} alt="" />
      </div>

      <div className="contenido">
        <h1 className="ti-principal">Hola!</h1>
        <p>Llevo más de una década de experiencia en el campo web. Comencé mi carrera enfocándome en la creación de wireframes y mockups. Sin embargo, mi deseo constante de aprendizaje me llevó a avanzar en mi conocimiento, pasando de maquetas en HTML, CSS, JS y JQuery a trabajar con diversos frameworks, como Angular, Vue, React, Bootstrap, scss, Typescript, SharePoint y StoryBook. Esta evolución me permitió participar en proyectos significativos en diferentes empresas.</p>
        <p>Además, tengo una afinidad en el diseño y he acumulado una larga trayectoria en el área de UI, donde he creado propuestas en herramientas como Figma, Sketch y Adobe XD. Este conjunto de habilidades en desarrollo y diseño me ha permitido ofrecer soluciones web completas y efectivas a lo largo de mi carrera.</p>
      </div>
      
      </div>
     
    </section>
  )
}

export {Home}