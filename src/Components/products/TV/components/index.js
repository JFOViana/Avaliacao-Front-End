import React, { useState } from 'react';
import { TV } from './televisionModel';

export default function Televisao({ productsInfo }) {
  const [info, setInfo] = useState(false);

  const hiddenText = {
    opacity: '0',
    height: '0',
    overlfow: 'hidden',
    transition: '0.3s',
  };

  const showText = {
    opacity: '1',
    height: '100px',
    overlfow: 'unset',
    transition: '0.3s',
  };
  return (
    <>
      <h2>R$2250,00</h2>
      <div className="cascata" style={info ? showText : hiddenText}>
        {TV.slice(productsInfo, productsInfo + 1).map((item) => (
          <p> {item.seeMore} </p>
        ))}
        <p>Tamanho: 124,46cm</p>
        <p>Peso: 16,5 Kilos</p>
        <p>Adquirido em: 15/03/2021</p>
      </div>
      <div className="button" onClick={() => setInfo(!info)}>
        <button className="button-default">
          {info ? 'Ver Menos' : 'Veja mais'}
        </button>
      </div>
    </>
  );
}
