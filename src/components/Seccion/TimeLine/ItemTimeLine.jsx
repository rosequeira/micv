import React from 'react';
import './ItemTimeLine.scss';

function ItemTimeLine({titulo, detalle, fechaInicio, fechaTermino, empresa}) {
  return (
    <div className="cont-item-TL">
        <div className="left-TL">
            <div className="empresa">{empresa}</div>
            <div className="fecha">{fechaInicio} / {fechaTermino}</div>
        </div>
        <div className="line-TL">
            <div className="circle"></div>
            <div className="borde"></div>
        </div>
        <div className="right-TL">
            <div className="title">{titulo}</div>
            <div className="bajada">{detalle}</div>
        </div>
    </div>
  )
}

export {ItemTimeLine}