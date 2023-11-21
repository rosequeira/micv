import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logotipo from "../../assets/logo-ro.svg";
import { Avatar } from "/src/components/Avatar/Avatar";
import {
  faBriefcase,
  faMobile,
  faPaperPlane,
  faClipboardUser,
  faFilePdf,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./AsideCV.scss";
import { BrowserRouter, Link } from "react-router-dom";
import { PDF } from "../../utils/constant";

library.add(
  faMobile,
  faPaperPlane,
  faBriefcase,
  faClipboardUser,
  faFilePdf,
  faCodeBranch
);

function AsideCV() {
  const pdf = PDF;
  return (
    <div className="aside-cv">
      <div className="use-avatar">
        <Avatar />
      </div>
      <div className="logotipo">
        <img src={logotipo} alt="" />
      </div>
      <div className="cont-data">
        <BrowserRouter>
          <div className="data">
            <FontAwesomeIcon className="cancel-list" icon={faMobile} />
            <p>+569 511 88388</p>
          </div>

          <div className="data">
            <FontAwesomeIcon className="cancel-list" icon={faPaperPlane} />
            <p>sequeira.cortes@gmail.com</p>
          </div>

          <div className="data">
            <FontAwesomeIcon icon={faClipboardUser} />
            <Link
              target={"_blank"}
              to="https://www.linkedin.com/in/rcsequeira/"
            >
              linkedin.com/rcsequeira
            </Link>
          </div>

          <div className="data">
            <FontAwesomeIcon icon={faCodeBranch} />
            <Link target={"_blank"} to="https://github.com/rosequeira">
              @github.com/rosequeira
            </Link>
          </div>

          <div className="data">
            <FontAwesomeIcon icon={faBriefcase} />
            <Link target={"_blank"} to="https://rodrighos-blog.tumblr.com/">
              rodrighos-blog.tumblr.com
            </Link>
          </div>

          <div className="data">
            <FontAwesomeIcon icon={faFilePdf} />
            <Link download="rodrigo-cortes-cv" target={"_blank"} to={pdf}>
              Descargar CV
            </Link>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export { AsideCV };
