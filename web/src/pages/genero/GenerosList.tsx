import { useEffect } from "react";
import { useGlobalStore } from '../../store/useGlobalStore'
import { useNavigate } from "react-router-dom";

export default function GeneroList() {

  const navigate = useNavigate();
  const { generosList, getGeneroAll, deleteGeneroById, getGeneroById }: any = useGlobalStore(s => s)

  useEffect(() => {
    getGeneroAll()
  }, [])

  return (
    <>
      <div className="w-full mx-10">
        <h1 className="text-white mb-5 font-mono">Procure por Genero:</h1>
        <button onClick={() => { navigate('/Genero/cadastro') }} className={`text-white rounded text-sm px-1.5 py-1 bg-gray-600`}>+ Genero</button>
        <table className="min-w-full mt-2 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Genero
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {generosList.map((e: any, i: number) => (
              <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                  {e.id}
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {e.nome}
                </th>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    {/* <button onClick={() => { navigate('/Genero/cadastro') }} className={`text-white rounded text-sm px-1.5 py-1 bg-gray-600`}>Ver Livros</button> */}
                    {/* <button onClick={() => { getGeneroById(e.id); navigate('/Genero/cadastro/' + e.id) }} className={`text-white rounded text-sm px-1.5 py-1 bg-gray-600`}>Editar</button> */}
                    <button onClick={async () => { await deleteGeneroById(e.id); getGeneroAll() }} className={`text-white rounded text-sm px-1.5 py-1 bg-gray-600`}>Excluir</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
