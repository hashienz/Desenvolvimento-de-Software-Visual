using System;
using Microsoft.EntityFrameworkCore;

namespace API.Models;

//1- Criar a herança da classe DbContext
//2- Criar os atributos que vão representar as tabelas do BD
//3- Configurar as configurações do seu banco de dados 
public class AppDataContext : DbContext
{
    public DbSet<Produto> Produtos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=Ecommerce.db");
        
    }


}
