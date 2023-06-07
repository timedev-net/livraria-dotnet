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

        // protected override void OnModelCreating(ModelBuilder builder)
        // {
        //     builder.Entity<Autor>().HasKey(AD => new {AD.Id , AD.})
        // }
    }
}