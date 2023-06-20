import { useEffect, useState } from "react";
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom';

export default function CarrinhoList(props: any) {

  const [listCar, setListCar] = useState<any[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)

  const removeToCar = (id: number) => {
    const listFilter = listCar.filter((e: any) => e.id !== id)
    setListCar(listFilter)
    localStorage.setItem('ListCar', JSON.stringify(listFilter))
  }


  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('ListCar') || "[]")
    setListCar(list)
  }, [])

  return (

    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white mb-5 font-mono w-[40%]">Lista do Carrinho:</h1>
      <div className="flex flex-wrap gap-4 justify-center"></div>
      <div className="bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Meu Carrinho</h5>

        </div>
        <div>
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {listCar.map((e, i) => (
              <li key={i} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-20 h-30" src={e.imagemCapa} alt="image" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                      {e.titulo}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {e.autor.map(e => e.nome).join(", ")}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    R$ {e.preco}
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <button onClick={() => { removeToCar(e.id) }} className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 bg-red-700 hover:bg-red-800 focus:ring-red-300`}><MdOutlineRemoveShoppingCart /></button>
                  </div>

                </div>
              </li>))}
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
                  <span className="text-xl">R$ {listCar.reduce((acc, item) => acc + item.preco, 0)}</span>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <button onClick={() => { setOpenModal(true) }} className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 bg-green-700 hover:bg-green-800 focus:ring-green-300`}>Finalizar o pedido</button>
                </div>

              </div>
            </li>
          </ul>
        </div>



      </div>
      <div id="defaultModal" aria-hidden="true" className={`fixed z-50 top-[25%] w-[50vw] ${!openModal && 'hidden'}`}>
        <div className="relative">

          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
              x
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Informações do Cliente</h3>
              <form className="space-y-6" action="#">
                <div>
                  <label htmlFor="cpf" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CPF</label>
                  <input type="text" id="cpf" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div>
                  <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                  <input type="text" id="nome" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                  <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                
                <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Finalizar Venda</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
