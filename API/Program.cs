using API.Models;

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
    return listaDeProdutos;

});

app.MapPost("/api/produto/cadastrar", (Produto produto) =>
{
    
    listaDeProdutos.Add(produto);

});



app.Run();



