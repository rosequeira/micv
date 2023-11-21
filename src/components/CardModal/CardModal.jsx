import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./CardModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function CardModal({ img, titulo }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const list = document.body.classList;
    isOpen ? list.add("modal-open") : list.remove("modal-open");

    return () => {
      list.remove("modal-open");
    };
  }, [isOpen]);

  const modalRoot = document.getElementById("root");

  const showModal = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  if (!isOpen) {
    return (
      <div className="cardModal" onClick={showModal}>
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="ti">{titulo}</div>
      </div>
    );
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="btn-close" onClick={showModal}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className="cont-modal">
        <div className="modal-header">
          <div className="ti-head">{titulo}</div>
        </div>
        <div className="modal-body">
          <div className="modal-img">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default CardModal;
