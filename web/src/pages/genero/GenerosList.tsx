import { useEffect } from "react";
import { useGlobalStore } from '../../store/useGlobalStore'
import { Link, useNavigate } from "react-router-dom";

export default function GeneroList() {

  const navigate = useNavigate();
  const { generosList, getGeneroAll, deleteGeneroById, getGeneroById }: any = useGlobalStore(s => s)

  useEffect(() => {
    console.log("GeneroList")
    getGeneroAll()
  }, [])

  useEffect(() => {
    console.log(generosList)
  }, [generosList])


  return (
    <>


      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white mb-5 font-mono w-[50%]">Procure por Genero:</h1>
        <div className="flex flex-wrap gap-4 max-w-[60%] justify-center">
          <div className="relative overflow-x-auto">
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            
              <button onClick={() => { navigate('/Genero/cadastro') }} className={`text-white rounded text-sm px-1.5 py-1 bg-gray-600`}>+ Genero</button>
            </div>
            <table className="w-[50vw] text-sm text-left text-gray-500 dark:text-gray-400">
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
                        <button onClick={() => { navigate('/Genero/cadastro') }} className={`text-white rounded text-sm px-1.5 py-1 bg-gray-600`}>Ver Livros</button>
                        <button onClick={() => { getGeneroById(e.id); navigate('/Genero/cadastro/'+e.id) }} className={`text-white rounded text-sm px-1.5 py-1 bg-gray-600`}>Editar</button>
                        <button onClick={() => { deleteGeneroById(e.id) }} className={`text-white rounded text-sm px-1.5 py-1 bg-gray-600`}>Excluir</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  );
}
