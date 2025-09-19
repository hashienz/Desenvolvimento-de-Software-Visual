using API.Models;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Listas com produtos
List<Produto> listaDeProdutos = new List<Produto>
{
    new Produto { Nome = "Teclado Mecânico", Quantidade = 10, Preco = 199.99 },
    new Produto { Nome = "Mouse Gamer", Quantidade = 15, Preco = 149.90 },
    new Produto { Nome = "Monitor", Quantidade = 5, Preco = 899.00 },
    new Produto { Nome = "Cadeira Gamer", Quantidade = 7, Preco = 1200.50 },
    new Produto { Nome = "Headset", Quantidade = 20, Preco = 299.90 }
};

app.MapGet("/", () => "API de Produtos");

app.MapGet("/api/produto/listar", () =>
{
    if (listaDeProdutos.Count == 0)
    {
        Console.WriteLine("A lista esta vazia");
        return Results.NoContent();
    }
    return Results.Ok(listaDeProdutos);
});

app.MapPost("/api/produto/cadastrar", ([FromBody] Produto produto) =>
{
    foreach (Produto produtoCadastrado in listaDeProdutos)
    {
        if (produtoCadastrado.Nome == produto.Nome)
        {
            return Results.Conflict("Produto ja cadastrado!");
        }
    }

    listaDeProdutos.Add(produto);
    return Results.Created("", produto);

});

app.MapGet("/api/produto/buscar/{nome}", ([FromRoute] string nome) =>
{
    //Expressão lambda
    // Produto resultado = listaDeProdutos.FirstOrDefault(x => x.Nome.Contains(nome));

    Produto? resultado = listaDeProdutos.FirstOrDefault(x => x.Nome == nome);
    if (resultado == null)
    {
        return Results.NotFound("Produto não encontrado");
    }
    return Results.Ok(resultado);

});

app.MapDelete("/api/produto/deletar/{nome}", ([FromRoute] string nome) =>
{
    Produto? deletado = listaDeProdutos.FirstOrDefault(x => x.Nome == nome);
    if (deletado == null)
    {
        return Results.NotFound("Produto não encontrado");
    }

    listaDeProdutos.Remove(deletado);


    return Results.Ok(deletado);   

});

// Alteral produto pelo id
app.MapPatch("/api/produto/alterar/{id}", ([FromRoute] string id,
[FromBody] Produto produtoAlterado) =>
{
    Produto? alterado = listaDeProdutos.FirstOrDefault(x => x.Id == id);
    if (alterado == null)
    {
        return Results.NotFound("Produto não encontrado");
    }
    alterado.Nome = produtoAlterado.Nome;
    alterado.Quantidade = produtoAlterado.Quantidade;
    alterado.Preco = produtoAlterado.Preco;

    
    return Results.Ok(alterado);   

});



app.Run();

AppDataContext ctx = new AppDataContext();


