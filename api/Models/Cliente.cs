using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Cliente
    {
        public Cliente(string nome, string cpf) 
        {
            this.Nome = nome;
            this.Cpf = cpf;
        }
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Cpf { get; set; }
        public string? Email { get; set; }
        public IList<Venda>? Vendas { get; set; }
    }
}