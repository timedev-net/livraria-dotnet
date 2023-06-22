import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalStore } from '../../store/useGlobalStore'

export default function LivroDetalhes() {
  const { livroShow, getLivroById }: any = useGlobalStore(s => s)
  const navigate = useNavigate();
  const params = useParams();
  const [inCar, setInCar] = useState<boolean>(false)

  const addToCar = () => {
    const list = JSON.parse(localStorage.getItem('ListCar') || "[]")
    if (list.filter((e: any) => e.id === params.id).length === 0) {
      const newList = [...list, livroShow]
      localStorage.setItem('ListCar', JSON.stringify(newList))
      setInCar(true)
    }
  }

  const removeToCar = () => {
    const list = JSON.parse(localStorage.getItem('ListCar') || "[]")
    const listFilter = list.filter((e: any) => e.id != params.id)
    localStorage.setItem('ListCar', JSON.stringify(listFilter))
    setInCar(false)
  }

  const finalizaVenda = () => {
    if (!inCar) {
      addToCar()
    }
    navigate('/carrinho')
  }

  useEffect(() => {
    getLivroById(params.id)
    const list = JSON.parse(localStorage.getItem('ListCar') || "[]")
    if (list.filter((e: any) => e.id == params.id).length !== 0) {
      setInCar(true)
    }
  }, [])

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-white mb-5 font-mono w-[50%]">Livros diponíveis à venda:</h1>
        <div className="flex flex-wrap gap-4 max-w-[90%] justify-center">
          <div className="flex w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="pl-8 py-8 rounded-t-lg" src={livroShow?.imagemCapa ? livroShow.imagemCapa : "https://edit.org/photos/img/blog/zz7-flyer-personalizavel-para-capas-de-livros.jpg-840.jpg"} alt="product image" width={300} />
            <div className="p-8">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{livroShow?.titulo}</h5>
              <div className="flex items-center mt-2.5 mb-5">
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
              </div>
              {livroShow?.autor.map((e) => (
                <p key={e.id} className="font-semibold">{e.nome}</p>
              ))}
              <p className="text-sm font-semibold mb-2">{livroShow?.publicadoEm.split('-')[0]}</p>

              <p className="text-sm mb-2">{livroShow?.autor.map((e: any) => e.nome).join(', ')}</p>
              <p className="font-mono font-semibold text-right">R$ <span className='text-4xl'>{livroShow?.preco ? livroShow?.preco.toString().split('.')[0] : '0'}</span>,{livroShow?.preco ? livroShow?.preco.toFixed(2).toString().split('.')[1] : '00'}</p>
              <p className="font-mono  text-right">Preço de à vista</p>

              <div className="flex items-center justify-center mt-3 gap-2">
                <button onClick={inCar ? removeToCar : addToCar} className={`w-full text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ` + (inCar ? `dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 bg-red-700 hover:bg-red-800 focus:ring-red-300` : `dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-blue-700 hover:bg-blue-800 focus:ring-blue-300`)}>{inCar ? `Remover do ` : `Adicionar ao `} carrinho</button>
                <button onClick={() => {navigate('/carrinho')}} className={`w-full text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 bg-gray-700 hover:bg-gray-800 focus:ring-gray-300`}>Ir para o carrinho</button>

              </div>
                <button onClick={() => navigate('/livro')} className={`mt-2 w-full text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 bg-gray-700 hover:bg-gray-800 focus:ring-gray-300`}>Procurar mais livros</button>
                <button onClick={finalizaVenda} className={`mt-2 w-full text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 bg-green-700 hover:bg-green-800 focus:ring-green-300`}>Finalizar Venda</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
