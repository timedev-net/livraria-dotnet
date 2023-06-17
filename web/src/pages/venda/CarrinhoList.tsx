import { useEffect, useState } from "react";
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom';

export default function CarrinhoList(props: any) {

  const [listCar, setListCar] = useState<any[]>([])

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
      <h1 className="text-white mb-5 font-mono w-[50%]">Lista do Carrinho:</h1>
      <div className="flex flex-wrap gap-4 max-w-[60%] justify-center"></div>
      <div className="w-[100vh] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Meu Carrinho</h5>

        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {listCar.map((e, i) => <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="w-20 h-30" src={`https://picsum.photos/id/${e.id}/200/300`} alt="image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                    {e.titulo}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  R$ {e.preco}
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <button onClick={() => { removeToCar(e.id) }} className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 bg-red-700 hover:bg-red-800 focus:ring-red-300`}><MdOutlineRemoveShoppingCart/></button>
                </div>

              </div>
            </li>)}
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
                  <button onClick={() => { }} className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 bg-green-700 hover:bg-green-800 focus:ring-green-300`}>Finalizar o pedido</button>
                </div>

              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
