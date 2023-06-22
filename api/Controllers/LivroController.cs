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
        public async Task<ActionResult<IEnumerable<Object>>> GetLivro()
        {
          if (_context.Livro == null)
          {
              return NotFound();
          }
            // return await _context.Livro.ToListAsync();

            var result = await _context.Livro
            .Select(p => new{ p.Id,
                p.Titulo,
                p.ImagemCapa,
                p.PublicadoEm,
                p.Preco,
                autor = p.AutorLivros.Select(e => new { id = e.Autor.Id, nome = e.Autor.Nome}),
                genero = p.GeneroLivros.Select(e => new{ id = e.Genero.Id, nome = e.Genero.Nome}),
            })
            .ToListAsync();
            return result;
        }

        // Console.WriteLine("Helloooooooooooooooooooooooooooooooooooooooooooooooooooooo");
        // GET: api/Livro/5
        [HttpGet("{id}")]
        public async Task<ActionResult> GetLivro(int id)
        {
          if (_context.Livro == null)
          {
              return NotFound();
          }
            // var livro = await _context.Livro.Include(p => p.AutorLivros)
            // .ThenInclude(p => p.Autor)
            // .FirstOrDefaultAsync(p => p.Id == id);
            var livro = await _context.Livro
            .Select(p => new{ p.Id,
                p.Titulo,
                p.ImagemCapa,
                p.PublicadoEm,
                p.Preco,
                autor = p.AutorLivros.Select(e => new{ id = e.Autor.Id, nome = e.Autor.Nome}),
                genero = p.GeneroLivros.Select(e => new{ id = e.Genero.Id, nome = e.Genero.Nome}),
            })
            .FirstOrDefaultAsync(p => p.Id == id);
            
            if (livro == null)
            {
                return NotFound();
            }

            return Ok(livro);
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
        public async Task<ActionResult<Object>> PostLivro(LivroDto dto)
        {
            
          if (_context.Livro == null)
          {
              return Problem("Entity set 'ApplicationDbContext.Livro'  is null.");
          }

            var livro = new Livro();
            livro.Titulo = dto.Titulo!;
            livro.PublicadoEm = dto.PublicadoEm!;
            livro.ImagemCapa = dto.ImagemCapa!;
            livro.Preco = dto.Preco!;
            livro.AutorLivros = new List<AutorLivro>();
            livro.GeneroLivros = new List<GeneroLivro>();

            foreach (var id in dto.AutoresId!) {
                var autorLivro = new AutorLivro();
                autorLivro.AutorId = id;
                livro.AutorLivros.Add(autorLivro);
            }
            foreach (var id in dto.GenerosId!) {
                var generoLivro = new GeneroLivro();
                generoLivro.GeneroId = id;
                livro.GeneroLivros.Add(generoLivro);
            }

            _context.Livro.Add(livro);
            await _context.SaveChangesAsync();

            return Ok(new { id = livro.Id });
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
