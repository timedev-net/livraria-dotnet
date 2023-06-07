using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Livro
    {
        public Livro() {}
        public Livro(int id, string nome) {
            this.Id = id;
            this.Nome = nome;
        }
        public int Id { get; set; }
        public string? Nome { get; set; }
        public DateOnly PublicadoEm { get; set; }

        public List<AutorLivro>? Autores { get; set; }
    }
}