using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Genero
    {
        public int Id { get; set; }
        public string? Nome { get; set; }

        public IList<GeneroLivro>? GeneroLivros { get; set; }
    }
}