using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class GeneroLivro
    {
        public int GeneroId { get; set; }
        public int LivroId { get; set; }
        public Genero? Genero { get; set; }
        public Livro? Livro { get; set; }

    }
}
