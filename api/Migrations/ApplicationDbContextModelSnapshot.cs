﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using api.Data;

#nullable disable

namespace api.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.5");

            modelBuilder.Entity("api.Models.Autor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nome")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Autor");
                });

            modelBuilder.Entity("api.Models.AutorLivro", b =>
                {
                    b.Property<int>("AutorId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("LivroId")
                        .HasColumnType("INTEGER");

                    b.HasKey("AutorId", "LivroId");

                    b.HasIndex("LivroId");

                    b.ToTable("AutorLivro");
                });

            modelBuilder.Entity("api.Models.Cliente", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Cpf")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("Cpf")
                        .IsUnique();

                    b.ToTable("Cliente");
                });

            modelBuilder.Entity("api.Models.Genero", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nome")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Genero");
                });

            modelBuilder.Entity("api.Models.GeneroLivro", b =>
                {
                    b.Property<int>("GeneroId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("LivroId")
                        .HasColumnType("INTEGER");

                    b.HasKey("GeneroId", "LivroId");

                    b.HasIndex("LivroId");

                    b.ToTable("GeneroLivro");
                });

            modelBuilder.Entity("api.Models.Livro", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ImagemCapa")
                        .HasColumnType("TEXT");

                    b.Property<double?>("Preco")
                        .HasColumnType("REAL");

                    b.Property<DateOnly>("PublicadoEm")
                        .HasColumnType("TEXT");

                    b.Property<string>("Titulo")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Livro");
                });

            modelBuilder.Entity("api.Models.Venda", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("ClienteId")
                        .HasColumnType("INTEGER");

                    b.Property<DateOnly?>("DataCompra")
                        .HasColumnType("TEXT");

                    b.Property<bool?>("Status")
                        .HasColumnType("INTEGER");

                    b.Property<float?>("Total")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.HasIndex("ClienteId");

                    b.ToTable("Venda");
                });

            modelBuilder.Entity("api.Models.VendaItens", b =>
                {
                    b.Property<int>("VendaId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("LivroId")
                        .HasColumnType("INTEGER");

                    b.HasKey("VendaId", "LivroId");

                    b.HasIndex("LivroId");

                    b.ToTable("VendaItens");
                });

            modelBuilder.Entity("api.Models.AutorLivro", b =>
                {
                    b.HasOne("api.Models.Autor", "Autor")
                        .WithMany("AutorLivros")
                        .HasForeignKey("AutorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("api.Models.Livro", "Livro")
                        .WithMany("AutorLivros")
                        .HasForeignKey("LivroId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Autor");

                    b.Navigation("Livro");
                });

            modelBuilder.Entity("api.Models.GeneroLivro", b =>
                {
                    b.HasOne("api.Models.Genero", "Genero")
                        .WithMany("GeneroLivros")
                        .HasForeignKey("GeneroId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("api.Models.Livro", "Livro")
                        .WithMany("GeneroLivros")
                        .HasForeignKey("LivroId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Genero");

                    b.Navigation("Livro");
                });

            modelBuilder.Entity("api.Models.Venda", b =>
                {
                    b.HasOne("api.Models.Cliente", "Cliente")
                        .WithMany("Vendas")
                        .HasForeignKey("ClienteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cliente");
                });

            modelBuilder.Entity("api.Models.VendaItens", b =>
                {
                    b.HasOne("api.Models.Livro", "Livro")
                        .WithMany("VendaItens")
                        .HasForeignKey("LivroId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("api.Models.Venda", "Venda")
                        .WithMany("VendaItens")
                        .HasForeignKey("VendaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Livro");

                    b.Navigation("Venda");
                });

            modelBuilder.Entity("api.Models.Autor", b =>
                {
                    b.Navigation("AutorLivros");
                });

            modelBuilder.Entity("api.Models.Cliente", b =>
                {
                    b.Navigation("Vendas");
                });

            modelBuilder.Entity("api.Models.Genero", b =>
                {
                    b.Navigation("GeneroLivros");
                });

            modelBuilder.Entity("api.Models.Livro", b =>
                {
                    b.Navigation("AutorLivros");

                    b.Navigation("GeneroLivros");

                    b.Navigation("VendaItens");
                });

            modelBuilder.Entity("api.Models.Venda", b =>
                {
                    b.Navigation("VendaItens");
                });
#pragma warning restore 612, 618
        }
    }
}
