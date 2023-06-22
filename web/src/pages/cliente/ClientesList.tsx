import { useEffect, useState } from "react";
import { useGlobalStore } from '../../store/useGlobalStore'
import { useNavigate } from "react-router-dom";
import { BsSearch } from 'react-icons/bs'
import { useForm } from "react-hook-form";

export default function ClientesList() {

  const navigate = useNavigate();
  const { clientesList, getClienteAll, deleteClienteById, getClienteById }: any = useGlobalStore(s => s)
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm();
  const [filtro, setFiltro] = useState<string>()

  function onSubmit(data: any) {
    setFiltro(data.search)
  }

  useEffect(() => {
    getClienteAll()
  }, [])

  return (
    <>
      <div className="w-full mx-10">
        <h1 className="text-white mb-5 font-mono">Procure por Cliente:</h1>
        {/* <button onClick={() => { navigate('/cliente/cadastro') }} className={`mb-2 text-white rounded text-sm px-1.5 py-1 bg-gray-600`}>+ Cliente</button> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsSearch />
            </div>
            <input {...register('search')} type="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Pesquisa pelo nome" />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Pesquisar</button>
          </div>
        </form>
        <table className="min-w-full mt-2 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Clientes
              </th>
              <th scope="col" className="px-6 py-3">
                CPF
              </th>
              <th scope="col" className="px-6 py-3">
                E-mail
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {clientesList.map((e: any, i: number) => {
              if (filtro?.trim()) {
                if (e.nome.toLowerCase().includes(filtro?.toLowerCase())) {
                  return (
                    <tr key={i} className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-6 py-4">
                        {e.id}
                      </td>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {e.nome}
                      </th>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {e.cpf}
                      </th>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {e.email}
                      </th>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button onClick={async () => { await deleteClienteById(e.id); getClienteAll() }} className={`text-white rounded text-sm px-1.5 py-1 bg-gray-600`}>Excluir</button>
                        </div>
                      </td>
                    </tr>
                  )
                }
              } else {
                return (
                  <tr key={i} className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4">
                      {e.id}
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {e.nome}
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {e.cpf}
                      </th>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {e.email}
                    </th>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button onClick={async () => { await deleteClienteById(e.id); getClienteAll() }} className={`text-white rounded text-sm px-1.5 py-1 bg-gray-600`}>Excluir</button>
                      </div>
                    </td>
                  </tr>
                )
              }


            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
