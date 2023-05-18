using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Genero
    {
        public Genero() {}
        public Genero(int id, string nome) {
            this.Id = id;
            this.Nome = nome;
        }
        public int Id { get; set; }
        public string? Nome { get; set; }
    }
}