using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Venda
    {
        public int Id { get; set; }
        public int ClienteId { get; set; }
        public Cliente? Cliente { get; set; }
        public IList<VendaItens>? VendaItens { get; set; }
        public DateOnly? DataCompra { get; set; }
        public float? Total { get; set; }
        public bool? Status { get; set; }
    }
}
