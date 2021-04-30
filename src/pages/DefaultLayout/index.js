import React, { useState } from 'react';
import Main from '../main';
import Header from '../../Components/Header';
import { Container } from './styles';

export default function DefaultLayout() {
  const [handleItems, setHandleItems] = useState('All');

  return (
    <Container>
      <Header setItems={setHandleItems} items={handleItems} />
      <Main items={handleItems} />
    </Container>
  );
}
