using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Autor
    {
        public Autor() {}
        public Autor(int id, string nome) {
            this.Id = id;
            this.Nome = nome;
        }
        public int Id { get; set; }
        public string? Nome { get; set; }

        public List<AutorLivro>? Livros { get; set; }
        
    }
}