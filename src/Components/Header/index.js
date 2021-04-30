import React, { useState } from 'react';
import { Container } from './styles';

export default function Index({ setItems, items }) {
  const [menuSize, setMenuSize] = useState(false);
  return (
    <Container propsMenuSize={menuSize}>
      <header>
        <button
          onClick={() => setMenuSize(!menuSize)}
          className="hamburguer-menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className="button">
          <ul>
            <li>
              <h2>Filtros:</h2>
            </li>
            <li>
              <button
                href="#"
                onClick={() => setItems('All')}
                className="button-default"
                style={
                  items === 'All'
                    ? {
                        color: 'black',
                        fontWeight: '600',
                        fontSize: '14px',
                        borderBottom: '2px solid black',
                      }
                    : null
                }
              >
                Todos
              </button>
            </li>
            <li>
              <button
                href="#"
                onClick={() => setItems('Phone')}
                className="button-default"
                style={
                  items === 'Phone'
                    ? {
                        color: 'black',
                        fontWeight: '600',
                        fontSize: '14px',
                        borderBottom: '2px solid black',
                      }
                    : null
                }
              >
                Celulares
              </button>
            </li>
            <li>
              <button
                href="#"
                onClick={() => setItems('TV')}
                className="button-default"
                style={
                  items === 'TV'
                    ? {
                        color: 'black',
                        fontWeight: '600',
                        fontSize: '14px',
                        borderBottom: '2px solid black',
                      }
                    : null
                }
              >
                Televisão
              </button>
            </li>
            <li>
              <button
                href="#"
                onClick={() => setItems('Computers')}
                className="button-default"
                style={
                  items === 'Computers'
                    ? {
                        color: 'black',
                        fontWeight: '600',
                        fontSize: '14px',
                        borderBottom: '2px solid black',
                      }
                    : null
                }
              >
                Computadores
              </button>
            </li>
          </ul>
        </div>
      </header>
      <div className="fix" />
    </Container>
  );
}
