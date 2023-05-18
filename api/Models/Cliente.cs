using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Cliente
    {
        public Cliente() {}
        public Cliente(int id, string nome) {
            this.Id = id;
            this.Nome = nome;
        }
        public int Id { get; set; }
        public string? Nome { get; set; }
    }
}