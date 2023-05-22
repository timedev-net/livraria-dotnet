import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../layouts/ErrorPage";
import LayoutPublic from "../layouts/LayoutPublic";
import LivrosList from "../pages/LivrosList";


export const routes = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPublic />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'livros',
          element: <LivrosList/>
        }
      ]
    },
  ]);