
# Comandos API
- dotnet watch run
- dotnet run
- dotnet add package 'nome do pacote'

## Comandos para fazer a intalação do entity framework
- dotnet tool install --global dotnet-ef

dotnet add package Microsoft.EntityFrameworkCore.Design -v 7.0.5
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design -v 7.0.5
- dotnet tool install -g dotnet-aspnet-codegenerator

## gerar o Controller com crud
dotnet-aspnet-codegenerator controller -name LivroController -async -api -m Livro -dc ApplicationDbContext -outDir Controllers

dotnet ef migrations add criaBanco
dotnet ef database update
dotnet ef database drop

dotnet ef migrations list

# Comandos projeto WEB
- npm run dev

# REQUISITOS DO PROJETO - Prof. Willians de Paula Pereira

Implementação do padrão MVC
Projeto Model
Projeto View
Projeto Controller
Mapeamento do banco nas classes
Implementação de integração com o banco de dados (ADO.NET)
CRUD Livro
CRUD Autor
CRUD Gênero
CRUD Cliente
Executar Stored Procedure para realização da venda do livro
Implementação do carrinho de compras para venda dos livros
A venda só poderá ser realizada para clientes previamente cadastrados
Apresentar relatório em tela dos livros vendidos
Permitir a busca de livros com filtro por gênero
Permitir a busca de clientes