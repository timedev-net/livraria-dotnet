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
    public class LivroController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public LivroController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Livro
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Livro>>> GetLivro()
        {
          if (_context.Livro == null)
          {
              return NotFound();
          }
            return await _context.Livro.ToListAsync();
        }

        // GET: api/Livro/5
        [HttpGet("{id}")]
        public async Task<ActionResult> GetLivro(int id)
        {
          if (_context.Livro == null)
          {
              return NotFound();
          }
            var livro = await _context.Livro.Include(p => p.AutorLivros)
            .ThenInclude(p => p.Autor)
            .FirstOrDefaultAsync(p => p.Id == id);
            
            if (livro == null)
            {
                return NotFound();
            }

            return Ok(new { livro.Titulo, livro.Id, Autores = livro.AutorLivros.Select(p => p.Autor) });
        }

        // PUT: api/Livro/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLivro(int id, Livro livro)
        {
            if (id != livro.Id)
            {
                return BadRequest();
            }

            _context.Entry(livro).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LivroExists(id))
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

        // POST: api/Livro
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Livro>> PostLivro(LivroDto dto)
        {
          if (_context.Livro == null)
          {
              return Problem("Entity set 'ApplicationDbContext.Livro'  is null.");
          }

            var livro = new Livro();
            livro.Titulo = dto.Titulo!;
            livro.PublicadoEm = dto.PublicadoEm!;
            livro.AutorLivros = new List<AutorLivro>();

            foreach (var id in dto.AutoresId!) {
                var autorLivro = new AutorLivro();
                autorLivro.AutorId = id;
                livro.AutorLivros.Add(autorLivro);
            }

            _context.Livro.Add(livro);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLivro", new { id = livro.Id }, livro);
        }

        // DELETE: api/Livro/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLivro(int id)
        {
            if (_context.Livro == null)
            {
                return NotFound();
            }
            var livro = await _context.Livro.FindAsync(id);
            if (livro == null)
            {
                return NotFound();
            }

            _context.Livro.Remove(livro);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LivroExists(int id)
        {
            return (_context.Livro?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
