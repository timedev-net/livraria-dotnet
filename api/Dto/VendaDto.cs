using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dto
{
    public class VendaDto
    {
        public int ClienteId { get; set; }
        public IList<int>? LivrosId { get; set; }
        public DateOnly DataCompra { get; set; }
        public float Total { get; set; }
        public bool Status { get; set; }
    }
}