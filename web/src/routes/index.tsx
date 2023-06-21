import {
  Link,
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../layouts/ErrorPage";
import LayoutPublic from "../layouts/LayoutPublic";
import LivrosList from "../pages/livro/LivrosList";
import NovoCliente from "../pages/cliente/NovoCliente";
import AutoresList from "../pages/autor/AutoresList";
import GenerosList from "../pages/genero/GenerosList";
import LivroDetalhes from "../pages/livro/LivroDetalhes";
// import MinhaConta from "../pages/MinhaConta";
import CarrinhoList from "../pages/venda/CarrinhoList";
import AutorForm from "../pages/autor/AutorForm";
import LivroForm from "../pages/livro/LivroForm";
import GeneroList from "../pages/genero/GenerosList";
import GeneroForm from "../pages/genero/GeneroForm";
import VendasList from "../pages/venda/VendasList";
import Home from "../pages/Home";
import ClientesList from "../pages/cliente/ClientesList";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />
      },

    ]
  },
  
  {
    path: "/cliente",
    element: <LayoutPublic />,
    children: [
      {
        path: '',
        element: <ClientesList />,
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
        element: <GeneroForm />,
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
    loader: () => { return 'teste'},
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
    path: "/venda",
    element: <LayoutPublic />,
    loader: () => { return 'teste'},
    children: [
      {
        path: '',
        element: <VendasList />,
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