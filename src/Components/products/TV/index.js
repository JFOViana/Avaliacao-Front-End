import React from 'react';
import { TV } from './components/televisionModel.js';
import InformationTV from './components';

export default function Index() {
  return (
    <section>
      <div className="title">
        <h1>Televisões </h1>

        <span> Total: {TV.length - 1 + 1}</span>
      </div>
      {TV.map((item) => (
        <div className="card" key={item.id}>
          <div className="div-image">
            <img src={item.img} alt="cardimage" />
          </div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <InformationTV productsInfo={item.id} />
        </div>
      ))}
    </section>
  );
}
