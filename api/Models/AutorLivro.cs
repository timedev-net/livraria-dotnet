using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class AutorLivro
    {
        // public int Id { get; set; }
        public int AutorId { get; set; }
        public int LivroId { get; set; }
        public Autor? Autor { get; set; }
        public Livro? Livro { get; set; }

    }
}
