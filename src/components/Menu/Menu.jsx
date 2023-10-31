import logotipo from '../../assets/logo-ro.svg';
import { Link, animateScroll as scroll} from 'react-scroll'
import './Menu.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Menu() {
  const itemMenu = [
    {title: 'Inicio', id: 'home'},
    {title: 'Sobre mi', id: 'about'},
    {title: 'Portafolio', id: 'work'},
    {title: 'Datos laborales', id: 'time-line'},
  ]

  const [menuXs, setMenuXs] = useState(false);
  
  const menuMobile = () => {
    if (window.innerWidth <= 576) {
      setMenuXs((prevValue) => !prevValue);
    }
  };

  return (
    <nav className='cont-menu'>
      <div className="logotipo" >
        <img src={logotipo} alt="" />
      </div>
      
      <div className={` ${menuXs ? 'open' : 'close'} list-menu`} >
        <div className="btn-close" onClick={menuMobile}><FontAwesomeIcon icon={faXmark} /></div>
        {itemMenu.map((item) => (
          <div key={item.id} className="list">
            <Link 
            activeClass="active" 
            to={item.id}
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
            onClick={menuMobile}
            >{item.title}</Link>
          </div>
        ))}
      </div>
      <div className="btn-menu" onClick={menuMobile}><FontAwesomeIcon icon={faBars} /></div>
      
  </nav>

  )
}

export {Menu}
