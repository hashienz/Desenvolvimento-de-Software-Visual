import axios from "axios";
import { errorMonitor } from "events";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Produto from "../../../models/Produto";

function AlterarProduto(){    
    const { id } = useParams();
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quantidade, setQuantidade] = useState(0);
    const [preco, setPreco] = useState(0);
    const navigate = useMavigate();

useEffect(() => {
    buscarProdutosAPI()
 }, []);

 async function buscarProdutosAPI(){
    try {
        const resposta = await axios.get(`http://localhost:5011/api/produto/buscar/${id}`);
        setNome(resposta.data.nome);
        setDescricao(resposta.data.descricao);
        setPreco(resposta.data.preco);
        setQuantidade(resposta.data.quantidade);
    } catch (error) {
        console.log("Erro ao buscar produto: " + error)
        
    }
 }
async function submeterProdutoAPI(){
       try {
      const produto: Produto = {
        nome, descricao, preco, quantidade,
      };
      const resposta = await axios.patch(`http://localhost:5011/api/produto/alterar/${id}`, produto);            
    //   navigate("/")
    } catch (error : any) {
      if(error.status === 409){
        console.log("Esse produto já foi cadastrado!");
      }
    } 

    }

 async function enviarProduto(e : any){
    e.preventDefault();
    submeterProdutoAPI();
 }

   return (
    <div>
      <h1>Alterar Produto</h1>
      <form onSubmit={enviarProduto}>
        <div>
          <label>Nome:</label>
          <input type="text"
           value={nome} onChange={(e: any) => setNome(e.target.value)} />
        </div>
        <div>
          <label>Descrição:</label>
          <input
            type="text"
           value={descricao} onChange={(e: any) => setDescricao(e.target.value)}
          />
        </div>
        <div>
          <label>Quantidade:</label>
          <input
            type="text"
            value={quantidade} onChange={(e: any) => setQuantidade(e.target.value)}
          />
        </div>
        <div>
          <label>Preço:</label>
          <input type="text" 
          value={preco} onChange={(e: any) => setPreco(e.target.value)} />
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default AlterarProduto;

function useMavigate() {
    throw new Error("Function not implemented.");
}
