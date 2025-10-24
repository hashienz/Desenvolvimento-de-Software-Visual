import { useState } from "react";
import Produto from "../../../models/Produto";

function CadastrarProduto(){
    const[nome, setNome] = useState("");

    function enviarProduto(event : any){
        event.preventDefault();
        submeterProdutoAPI();




    }

    async function submeterProdutoAPI(){
        // Olhar biblioteca axios


        const produto : Produto = {
            nome : nome,
            descricao : "Teste",
            preco : 123,
            quantidade : 12

        };

        const resposta = 
        await fetch("http://localhost:5055/api/produto/cadastrar", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(produto)
        });

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
                <input type="text" />
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