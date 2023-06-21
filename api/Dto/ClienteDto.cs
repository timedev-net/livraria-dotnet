using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dto
{
    public class ClienteDto
    {
        public ClienteDto(string nome, string cpf) 
        {
            this.Nome = nome;
            this.Cpf = cpf;
        }
        public string Nome { get; set; }
        public string Cpf { get; set;}
        public string? Email { get; set;}
    }
}