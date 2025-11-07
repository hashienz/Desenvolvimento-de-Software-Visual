import { useEffect, useState } from "react";
import Produto from "../../../models/Produto";
import axios from "axios";
import { Link } from "react-router-dom";
//Componente

// Regras para ser um componente
// - Composto por HTML, CSS e JS ou TS
// - Precisa ser uma função
// - Precisa retornar apenas um elemento HTML pai
// - Exportar o componente

function ListarProdutos() {
  //Estados - Variáveis
  const [produtos, setProdutos] = useState<Produto[]>([]);

  //Realizar operações ao carregar o componente
  useEffect(() => {
    console.log("O componente foi carregado!");
    buscarProdutosAPI();
  }, []);

  async function buscarProdutosAPI() {
    try {
      const resposta = await axios.get("http://localhost:5011/api/produto/listar");      
      setProdutos(resposta.data);
    } catch (error) {
      console.log("Erro na requisição: " + error);
    }
  }

    async function deletarProduto(id : string){
    try{
     const resposta = await axios.delete("http://localhost:5011/api/produto/remover/" + id);     
        buscarProdutosAPI();
      }
    catch (error) {
    console.log("Erro na requisição: " + error);
    }
  }

  async function atualizarProduto() {
    
  }

    //O return é a parte visual do componente
    return (
    <div id="listar_produtos">
      <h1>Listar Produtos</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Criado Em</th>
            <th>Deletar</th>
            <th>Alterar</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.descricao}</td>
              <td>{produto.quantidade}</td>
              <td>{produto.preco}</td>
              <td>{produto.criadoEm}</td>
              <td>
                <button onClick={() => deletarProduto(produto.id!)}>Deletar</button>
              </td>
              <td>
                <Link to ={`/produto/alterar/${produto.id}`}>Alterar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarProdutos;