import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../layouts/ErrorPage";
import LayoutPublic from "../layouts/LayoutPublic";
import LivrosList from "../pages/LivrosList";
import NovoUsuario from "../pages/NovoUsuario";
import AutoresList from "../pages/AutoresList";
import GenerosList from "../pages/GenerosList";
import LivroDetalhes from "../pages/LivroDetalhes";
import MinhaConta from "../pages/MinhaConta";
import CarrinhoList from "../pages/CarrinhoList";


export const routes = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPublic />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'livros',
          element: <LivrosList/>
        },
        {
          path: 'livro/:id',
          element: <LivroDetalhes/>
        },
        {
          path: 'autores',
          element: <AutoresList/>
        },
        {
          path: 'generos',
          element: <GenerosList/>
        },
        {
          path: 'minhaconta',
          element: <MinhaConta/>
        },
        {
          path: 'carrinho',
          element: <CarrinhoList/>
        },
        {
          path: 'novousuario',
          element: <NovoUsuario/>
        }
      ]
    },
    {
      path: "*",
      element: (
        <h1 className="grid place-items-center h-screen">
          Página não encontrada
        </h1>
      ),
    },  
  ]);