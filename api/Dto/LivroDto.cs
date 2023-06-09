using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dto
{
    public class LivroDto
    {
        public string? Titulo { get; set; }
        public string? ImagemCapa { get; set; }
        public double? Preco { get; set; }

        public DateOnly PublicadoEm { get; set; }

        public IList<int>? AutoresId { get; set; }
        public IList<int>? GenerosId { get; set; }
    }
}