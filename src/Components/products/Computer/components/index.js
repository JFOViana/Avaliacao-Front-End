import React, { useState } from 'react';
import { Computer } from './computerModel';

export default function Celular({ productsInfo }) {
  const [info, setInfo] = useState(false);

  const hiddenText = {
    opacity: '0',
    height: '0',
    overlfow: 'hidden',
    transition: '0.3s',
    zIndex: '1',
    position: 'relative',
  };

  const showText = {
    opacity: '1',
    height: '100px',
    overlfow: 'unset',
    transition: '0.3s',
    zIndex: '1',
    position: 'relative',
  };

  return (
    <>
      <div className="">
        <h2>R$2250,00</h2>
      </div>
      <div className="cascata" style={info ? showText : hiddenText}>
        {Computer.slice(productsInfo, productsInfo + 2).map((item) => (
          <p> {item.seeMore} </p>
        ))}
        <p>Tamanho: 60cm</p>
        <p>Peso: 13 Kilos</p>
        <p>Adquirido em: 15/03/2021</p>
      </div>
      <div className="button" onClick={() => setInfo(!info)}>
        <button className="button-default">
          {' '}
          {info ? 'Ver Menos' : 'Veja mais'}
        </button>
      </div>
    </>
  );
}
