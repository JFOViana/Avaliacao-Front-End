import React from 'react';
import { Phone } from './components/phoneModels.js';
import InformationComputer from './components';

export default function Index() {
  return (
    <section>
      <div className="title">
        <h1>Celulares </h1>

        <span> Total: {Phone.length - 1 + 1}</span>
      </div>
      {Phone.map((item) => (
        <div className="card" key={item.id}>
          <div className="div-image">
            <img src={item.img} alt="cardimage" />
          </div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <InformationComputer productsInfo={item.id} />
        </div>
      ))}
    </section>
  );
}
