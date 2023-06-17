using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class VendaItens
    {
        // public int Id { get; set; }
        public int VendaId { get; set; }
        public int LivroId { get; set; }
        public Venda? Venda { get; set; }
        public Livro? Livro { get; set; }

    }
}
