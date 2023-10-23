import logotipo from '../../assets/logo-ro.svg';
import { Link, animateScroll as scroll} from 'react-scroll'
import './Menu.scss';

function Menu() {
  const itemMenu = [
    {title: 'Inicio', id: 'home'},
    {title: 'Sobre mi', id: 'about'},
    {title: 'Portafolio', id: 'work'},
    {title: 'Datos laborales', id: 'time-line'},
  ]
  return (
    <nav className='cont-menu'>
      {/* <div className="logotipo" >
        <img src={logotipo} alt="" />
      </div> */}
      
      <div className="list-menu">
        {itemMenu.map((item) => (
          <div key={item.id} className="list">
            <Link 
            activeClass="active" 
            to={item.id}
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500} 
            >{item.title}</Link>
          </div>
        ))}
      </div>
  </nav>
  )
}

export {Menu}
