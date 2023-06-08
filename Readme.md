
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
