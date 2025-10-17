import { useEffect } from "react";

function ListarProdutos(){

    useEffect(() => {
        console.log("O componente foi carregado!");

        buscarProdutosAPI();

    },[])

    async function buscarProdutosAPI() {
        try{
        const resposta = await fetch("http://localhost:5055/api/produto/listar");
        console.log(resposta);

        if(!resposta.ok){
            throw new Error("Erro na requisição: " + resposta.statusText);
        }

        const dados = await resposta.json();
        console.table(dados);

        }catch(error)
        {
            console.log("Erro" + error)
        }
    }


    return(
        <div id = "listar_produtos">
        <h1>Listar Produtos</h1>
        </div>
    );
}

export default ListarProdutos;