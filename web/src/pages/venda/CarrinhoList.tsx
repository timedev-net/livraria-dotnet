import { useEffect, useState } from "react";
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import ModalFinalizaPedido from "../../components/ModalFinalizaPedido";
import { useGlobalStore } from "../../store/useGlobalStore";

export default function CarrinhoList(props: any) {

  const { handleCarrinhoList, carrinhoList }: any = useGlobalStore(s => s)
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false)

  const removeToCar = (id: number) => {
    const listFilter = carrinhoList.filter((e: any) => e.id !== id)
    handleCarrinhoList(listFilter)
    localStorage.setItem('ListCar', JSON.stringify(listFilter))
  }


  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('ListCar') || "[]")
    handleCarrinhoList(list)
  }, [])

  return (
<>

    <div className="w-full mx-10 flex flex-col items-center">
      <h1 className="text-white mb-5 font-mono w-full">Lista do Carrinho:</h1>
      <div className="w-3/5 min-w-min bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-bold leading-none text-gray-900 dark:text-white">Meu Carrinho</h5>
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {carrinhoList.length > 0? carrinhoList.map((e, i) => (
            <li key={i} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="w-20 h-30 cursor-pointer" src={e.imagemCapa} alt="image" onClick={() => {navigate(`/livro/${e.id}`)}} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                    {e.titulo}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {e.autor.map(e => e.nome).join(", ")}
                  </p>
                </div>
                <div className="whitespace-nowrap font-semibold text-gray-900 dark:text-white">
                  R$ {e.preco}
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <button onClick={() => { removeToCar(e.id) }} className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 bg-red-700 hover:bg-red-800 focus:ring-red-300`}><MdOutlineRemoveShoppingCart /></button>
                </div>

              </div>
            </li>)):
            <li>Nenhum item no carrinho</li>}
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                  Total dos itens
                </p>
              </div>
              <div className="flex-1 min-w-0">
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <span className="text-xl whitespace-nowrap">R$ {carrinhoList.reduce((acc, item) => acc + item.preco, 0).toFixed(2)}</span>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {carrinhoList.length > 0 && <button onClick={() => { setOpenModal(true) }} className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 bg-green-700 hover:bg-green-800 focus:ring-green-300`}>
                  Finalizar venda
                </button>}
              </div>

            </div>
          </li>
        </ul>
        <ModalFinalizaPedido openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </div>
    </>
  );
}
