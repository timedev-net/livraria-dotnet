import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../layouts/ErrorPage";
import LayoutPublic from "../layouts/LayoutPublic";
import LivrosList from "../pages/livro/LivrosList";
import NovoCliente from "../pages/cliente/NovoCliente";
import AutoresList from "../pages/autor/AutoresList";
import GenerosList from "../pages/genero/GenerosList";
import LivroDetalhes from "../pages/livro/LivroDetalhes";
import MinhaConta from "../pages/MinhaConta";
import CarrinhoList from "../pages/venda/CarrinhoList";
import AutorForm from "../pages/autor/AutorForm";
import LivroForm from "../pages/livro/LivroForm";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'minhaconta',
        element: <MinhaConta />
      },

    ]
  },
  {
    path: "/carrinho",
    element: <LayoutPublic />,
    children: [
      {
        path: '',
        element: <CarrinhoList />,
      }
    ]
  },
  {
    path: "/cliente",
    element: <LayoutPublic />,
    children: [
      {
        path: '',
        element: <GenerosList />,
      },
      {
        path: 'cadastro',
        element: <NovoCliente />,
      },
    ]
  },
  {
    path: "/genero",
    element: <LayoutPublic />,
    children: [
      {
        path: '',
        element: <GenerosList />,
      },
      {
        path: 'cadastro',
        element: <AutorForm />,
      },
    ]
  },
  {
    path: "/autor",
    element: <LayoutPublic />,
    children: [
      {
        path: '',
        element: <AutoresList />,
      },
      {
        path: 'cadastro',
        element: <AutorForm />,
      },
      {
        path: 'cadastro/:id',
        element: <AutorForm />,
      },
    ]
  },
  {
    path: "/livro",
    element: <LayoutPublic />,
    children: [
      {
        path: '',
        element: <LivrosList />,
      },
      {
        path: ':id',
        element: <LivroDetalhes />
      },
      {
        path: 'cadastro',
        element: <LivroForm />,
      },
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