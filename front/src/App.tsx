import React from 'react';
import ListarProdutos from './components/pages/produto/ListarProdutos';
import CadastrarProduto from './components/pages/produto/CadastrarProduto';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

//Componentes
// - HTML, CSS e JS ou TS
function App() {
  return (
    <div id ="app">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to = "/">Listar Produtos</Link></li>
            <li><Link to = "produto/cadastrar">Cadastrar Produto</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element = {<ListarProdutos/>}/>
          <Route path="/produto/cadastrar" element = {<ListarProdutos/>}/>
        </Routes>
        <footer>
          Rodapé da Aplicação
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
