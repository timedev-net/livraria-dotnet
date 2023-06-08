using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Autor
    {
        public int Id { get; set; }
        public string? Nome { get; set; }

        public IList<AutorLivro>? AutorLivros { get; set; }
        
    }
}