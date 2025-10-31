import { useState } from "react";
import Produto from "../../../models/Produto";
import axios from "axios";

function CadastrarProduto(){
    const[nome, setNome] = useState("");
    const[descricao, setDescricao] = useState("");
    const[preco, setPreco] = useState();
    const[quantidade, setQuantidade] = useState( );

    function enviarProduto(event : any){
        event.preventDefault();
        submeterProdutoAPI();
    }

    async function submeterProdutoAPI(){
    try {
        const produto : Produto = {
            nome,
            descricao,
            preco,
            quantidade,
        };

    const resposta = await axios.post("http://localhost:5055/api/produto/cadastrar", produto);
    
    } catch (error) {
         console.log(error);
        }
    }
    function escreverNome(event : any){
        setNome(event.target.valaue);
    }
    return(
        <div>
            <h1>Cadastrar Produto</h1>
            <form onSubmit={enviarProduto}>
                <div>
                    <label>Nome:</label>
                    <input onChange={escreverNome} type="text"/>
                </div>
                <label>Descrição:</label>
                <input type="text" onChange={(e:any) => setDescricao} />
                <div>
                    <div>
                        <button type="submit">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CadastrarProduto;