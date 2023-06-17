import { useEffect } from "react";
import { useGlobalStore } from '../../store/useGlobalStore'

export default function AutoresList() {

  const { autoresList, getAutorAll }: any = useGlobalStore(s => s)

  useEffect(() => {
    console.log("AutoresList")
    getAutorAll()
  }, [])

  // useEffect(() => {
  //   console.log(autoresList)
  // }, [autoresList])


  return (
    <>


      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white mb-5 font-mono w-[50%]">Procure por Autor:</h1>
        <div className="flex flex-wrap gap-4 max-w-[60%] justify-center">
          <div className="relative overflow-x-auto">
            <table className="w-[50vw] text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Autores
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {autoresList.map((e: any, i: number) => (
                  <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4">
                      {e.id}
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {e.nome}
                    </th>
                    <td className="px-6 py-4">
                      <a href="#">Ver Livros</a>
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
