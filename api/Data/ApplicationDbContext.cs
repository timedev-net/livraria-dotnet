using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<Autor> Autor { get; set; }
        public DbSet<Cliente> Cliente { get; set; }
        public DbSet<Genero> Genero { get; set; }
        public DbSet<Livro> Livro { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Autor>().HasKey(p => p.Id);
            builder.Entity<Livro>().HasKey(p => p.Id);

            builder.Entity<AutorLivro>().HasKey(p => new {p.AutorId, p.LivroId});

            builder.Entity<Autor>().HasMany(p => p.AutorLivros).WithOne(p => p.Autor).HasForeignKey(p => p.AutorId);
            builder.Entity<Livro>().HasMany(p => p.AutorLivros).WithOne(p => p.Livro).HasForeignKey(p => p.LivroId);
            
        }
    }
}