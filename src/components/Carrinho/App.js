import React from 'react';

import './App.css';
import Body from './Componentes/Body';
import Button from './Componentes/Button';
import Header from './Componentes/Header'

const App = () => {
  
  return (
    <>
      <div id="fundo">
        <div class="carrinho-aberto">
          <Header />
          <Body />
          <Button />
        </div>
      </div>
    </>
  );
};

export default App;
