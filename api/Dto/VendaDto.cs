using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dto
{
    public class VendaDto
    {
        public int ClinteId { get; set; }
        public int LivroId { get; set; }
        public DateOnly DataCompra { get; set; }
        public float Total { get; set; }
        public bool Status { get; set; }
    }
}