import React, { useState } from 'react';
import { Container } from './styles';
import Produtos from '../../Components/products';

export default function Index({ items }) {
  return (
    <Container>
      <Produtos handleProducts={items} />
    </Container>
  );
}
