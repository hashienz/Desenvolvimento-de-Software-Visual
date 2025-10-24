import { useEffect, useState } from "react";
import Produto from "../../../models/Produto";
//Componente

// Regras para ser um componente
// - Composto por HTML, CSS e JS ou TS
// - Precisa ser uma função
// - Precisa retornar apenas um elemento HTML pai
// - Exportar o componente

function ListarProdutos(){


    //Estados - Variáveis
    const [produtos, setProdutos] = useState<Produto[]>([]);

    //Realizar operações ao carregar o componente
    useEffect(() => {
        console.log("O componente foi carregado!");

        buscarProdutosAPI();

    },[])

    

    async function buscarProdutosAPI() {
        try{
        const resposta = await fetch("http://localhost:5055/api/produto/listar");
        // console.log(resposta);

        if(!resposta.ok){
            throw new Error("Erro na requisição: " + resposta.statusText);
        }

        const dados = await resposta.json();
        setProdutos(dados);
        } catch(error){
            console.log("Erro" + error)
        }
    }


    //O return é a parte visual do componente
    return(
        <div id = "listar_produtos">
        <h1>Listar Produtos</h1>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Criado Em</th>
                </tr>
            </thead>
            <tbody>
            {produtos.map((produto) =>
            <tr>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.preco}</td>
                <td>{produto.criadoEm}</td>
            </tr>
            
            )}
                
            </tbody>
            {/* <body>
                
            </body> */}
        </table>


        <ul>
        </ul>
        </div>
    );
}

export default ListarProdutos;