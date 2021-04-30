import React, { useState } from 'react';

import { Phone } from './phoneModels';

export default function Celular({ productsInfo }) {
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
        {Phone.slice(productsInfo, productsInfo + 1).map((item) => (
          <p> {item.seeMore} </p>
        ))}
        <p>Tamanho: 16 x 7,3 cm</p>
        <p>Peso: 140 gramas</p>
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
