using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Data;
using api.Models;
using api.Dto;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VendaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public VendaController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Venda
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Object>>> GetVenda()
        {
          if (_context.Venda == null)
          {
              return NotFound();
          }
            // return await _context.Venda.ToListAsync();
            var result = await _context.Venda
            .Select(p => new{ p.Id,
                p.DataCompra,
                p.Total,
                p.Status,
                p.Cliente,
                itens = p.VendaItens.Select(e => e.Livro),
            })
            .ToListAsync();
            return Ok(result);
        }

        // GET: api/Venda/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Venda>> GetVenda(int id)
        {
          if (_context.Venda == null)
          {
              return NotFound();
          }
            var venda = await _context.Venda.FindAsync(id);

            if (venda == null)
            {
                return NotFound();
            }

            return venda;
        }

        // PUT: api/Venda/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVenda(int id, Venda venda)
        {
            if (id != venda.Id)
            {
                return BadRequest();
            }

            _context.Entry(venda).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VendaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Venda
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Venda>> PostVenda(VendaDto dto)
        {
          if (_context.Venda == null)
          {
              return Problem("Entity set 'ApplicationDbContext.Venda'  is null.");
          }
            var venda = new Venda();
            venda.ClienteId = dto.ClienteId;
            venda.DataCompra = dto.DataCompra;
            venda.Total = dto.Total;
            venda.Status = dto.Status;
            venda.VendaItens = new List<VendaItens>();

            foreach (var id in dto.LivrosId!) {
                var vendaItens = new VendaItens();
                vendaItens.LivroId = id;
                venda.VendaItens.Add(vendaItens);
            }

            _context.Venda.Add(venda);

            await _context.SaveChangesAsync();

            return Ok(new {id = venda.Id});
        }

        // DELETE: api/Venda/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVenda(int id)
        {
            if (_context.Venda == null)
            {
                return NotFound();
            }
            var venda = await _context.Venda.FindAsync(id);
            if (venda == null)
            {
                return NotFound();
            }

            _context.Venda.Remove(venda);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VendaExists(int id)
        {
            return (_context.Venda?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
