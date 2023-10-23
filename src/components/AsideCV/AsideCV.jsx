import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logotipo from '../../assets/logo-ro.svg';
import { Avatar } from '/src/components/Avatar/Avatar';
import { faBriefcase, faMobile, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './AsideCV.scss'

library.add(faMobile, faPaperPlane, faBriefcase)

function AsideCV() {
  return (
   <div className="aside-cv">
    <div className="use-avatar">
        <Avatar />
    </div>
    <div className="logotipo">
        <img src={logotipo} alt="" />
      </div>
        <div className="cont-data">
             <div className="data">
             <FontAwesomeIcon className="cancel-list" icon={faMobile} />
             <p>+569 511 88388</p>
             </div>

             <div className="data">
             <FontAwesomeIcon className="cancel-list" icon={faPaperPlane} />
             <p>sequeira.cortes@gmail.com</p>
             </div>

             <div className="data">
             <FontAwesomeIcon icon={faBriefcase} />
             <p>https://rodrighos-blog.tumblr.com/</p>
             </div>
        </div>
   </div>
   
  )
}

export {AsideCV}