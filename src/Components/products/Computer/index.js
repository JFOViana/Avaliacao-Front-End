import React from 'react';
import { Computer } from './components/computerModel.js';
import InformationComputer from './components';

export default function Index() {
  return (
    <section>
      <div className="title">
        <h1>Computadores </h1>

        <span> Total: {Computer.length - 1 + 1}</span>
      </div>
      {Computer.map((item) => (
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
