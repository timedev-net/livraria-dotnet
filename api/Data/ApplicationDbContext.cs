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
        public DbSet<Venda> Venda { get; set;}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Autor>().HasKey(p => p.Id);
            builder.Entity<Livro>().HasKey(p => p.Id);
            builder.Entity<Genero>().HasKey(p => p.Id);
            builder.Entity<Venda>().HasKey(p => p.Id);
            builder.Entity<Cliente>().HasKey(p => p.Id);
            builder.Entity<Cliente>().HasIndex(p => p.Cpf).IsUnique();

            builder.Entity<AutorLivro>().HasKey(p => new {p.AutorId, p.LivroId});
            builder.Entity<GeneroLivro>().HasKey(p => new {p.GeneroId, p.LivroId});
            builder.Entity<VendaItens>().HasKey(p => new {p.VendaId, p.LivroId});

            builder.Entity<Autor>().HasMany(p => p.AutorLivros).WithOne(p => p.Autor).HasForeignKey(p => p.AutorId);
            builder.Entity<Livro>().HasMany(p => p.AutorLivros).WithOne(p => p.Livro).HasForeignKey(p => p.LivroId);

            builder.Entity<Livro>().HasMany(p => p.GeneroLivros).WithOne(p => p.Livro).HasForeignKey(p => p.LivroId);
            builder.Entity<Genero>().HasMany(p => p.GeneroLivros).WithOne(p => p.Genero).HasForeignKey(p => p.GeneroId);

            builder.Entity<Livro>().HasMany(p => p.VendaItens).WithOne(p => p.Livro).HasForeignKey(p => p.LivroId);
            builder.Entity<Cliente>().HasMany(p => p.Vendas).WithOne(p => p.Cliente).HasForeignKey(p => p.ClienteId);

        }
    }
}