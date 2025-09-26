using System;

namespace API.Models;

public class Produto
{
   //Construtor
    public Produto()
    {
        Id = Guid.NewGuid().ToString(); 
        CriadoEm = DateTime.Now;
    }

    //C#
    public string Id { get; set; }
    public string Nome { get; set; } = String.Empty;
    public string Descricao { get; set; } = String.Empty;
    public int Quantidade { get; set; }
    public double Preco { get; set; }
    public DateTime CriadoEm { get; set; }

}
