import React from 'react';
import ListarProdutos from './components/pages/produto/ListarProdutos';
import CadastrarProduto from './components/pages/produto/CadastrarProduto';

//Componentes
// - HTML, CSS e JS ou TS
function App() {
  return (
    <div id ="app">
      <h1>Minha Primeira Aplicação em React</h1>
      <ListarProdutos/>
      <CadastrarProduto/>
    </div>
  );
}

export default App;
