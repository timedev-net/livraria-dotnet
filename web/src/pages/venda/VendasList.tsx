import { useEffect } from "react";
import { useGlobalStore } from '../../store/useGlobalStore'
// import { useNavigate } from "react-router-dom";

export default function VendasList() {

  // const navigate = useNavigate();
  const { vendasList, getVendaAll, deleteVendaById }: any = useGlobalStore(s => s)

  useEffect(() => {
    getVendaAll()
  }, [])

  return (
    <>
      <div className="w-full mx-10">
        <h1 className="text-white mb-5 font-mono">Relatório de Vendas:</h1>
        {/* <button onClick={() => { navigate('/venda/cadastro') }} className={`text-white rounded text-sm px-1.5 py-1 bg-gray-600`}>+ Venda</button> */}
        <table className="min-w-full mt-2 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Data
              </th>
              <th scope="col" className="px-6 py-3">
                Cliente
              </th>
              <th scope="col" className="px-6 py-3">
                Cpf
              </th>
              <th scope="col" className="px-6 py-3">Livros</th>
              <th scope="col" className="px-6 py-3">Total</th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {vendasList.map((e: any, i: number) => (
              <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                  {e.id}
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {e.dataCompra && new Date(e.dataCompra).toLocaleString('pt-BR', {dateStyle: 'short', timeZone: 'UTC'})}
                </th>
                <td className="px-6 py-4 whitespace-nowrap">
                  {e.cliente.nome}
                </td>
                <td className="px-6 py-4">
                  {e.cliente.cpf}
                </td>
                <td className="px-6 py-4">
                  <ul className="list-disc">
                    {e.itens.map(el => (<li className="whitespace-nowrap" key={el.id}>{el.titulo}</li>))}
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-bold">
                  R$ {Number(e.total).toFixed(2)}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button onClick={async () => { await deleteVendaById(e.id); getVendaAll() }} className={`text-white rounded text-sm px-1.5 py-1 bg-gray-600`}>Excluir</button>
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
