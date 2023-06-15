using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Livro
    {
        public int Id { get; set; }
        public string? Titulo { get; set; }

        public DateOnly PublicadoEm { get; set; }
        public IList<AutorLivro>? AutorLivros { get; set; }
        public IList<GeneroLivro>? GeneroLivros { get; set; }

        public IList<Venda>? Vendas { get; set; }
    }
}