import React from 'react';
import Phones from './Phone';
import Computers from './Computer';
import TV from './TV';

export default function Celular({ handleProducts }) {
  const showInfo = () => {
    switch (handleProducts) {
      case 'All':
        return (
          <>
            <Phones />
            <Computers />
            <TV />
          </>
        );

      case 'Phone':
        return <Phones />;

      case 'Computers':
        return <Computers />;

      case 'TV':
        return <TV />;

      default:
        break;
    }
  };

  return <section>{showInfo()}</section>;
}
