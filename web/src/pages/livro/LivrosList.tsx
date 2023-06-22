import LivroCard from "../../components/LivroCard";
import { useEffect, useState } from "react";
import { useGlobalStore } from '../../store/useGlobalStore'
import { useNavigate } from "react-router-dom";

export default function LivrosList() {


  const navigate = useNavigate();
  const { livrosList, getLivroAll, getGeneroAll, generosList, attGenerosList }: any = useGlobalStore(s => s)
  const [filterGeneros, setfilterGeneros] = useState();

  const handleGenerosCheck = (e: any) => {
    const nArray = generosList.map((el: any) => {
      el.id === e.id && (el.checked = !el.checked)
      return el
    })
    attGenerosList(nArray)
  }

  useEffect(() => {
    (async () => {
      await getLivroAll()
      await getGeneroAll()
    })()
  }, [])

  useEffect(() => {
    const selected = generosList.filter((e: any) => e.checked).map((el: any) => el.id)
    setfilterGeneros(selected)
  }, [generosList])

  return (
    <>
      <div className="flex flex-col items-center mx-10 ">
      <h1 className="text-white mb-5 font-mono w-full">Livros diponíveis à venda:</h1>
        
        
      <button onClick={() => { navigate('/livro/cadastro') }} className={`mb-5 w-full text-white rounded text-sm px-1.5 py-1 bg-gray-600`}>Novo Livro</button>
        <h1 className="text-white mb-5 font-mono w-full">Filtrar por gênero:</h1>
        <div id="dropdownSearch" className={`z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700`}>
          <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
            {generosList.map((e: any, i: number) => (
              <li key={e.id}>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input id={`generos.${i}`} onChange={() => handleGenerosCheck(e)} checked={e.checked} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label htmlFor={`generos.${i}`} className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{e.nome}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-10 w-full">
        
        <div className="mt-2 flex flex-wrap gap-4 max-w-[70%] justify-center">

          {livrosList.map((e, i) => {
            if (filterGeneros?.length > 0) {
              const has = e.genero.reduce((a, g) => {
                filterGeneros.includes(g.id) && (a = true)
                return a
              }, false)
              return has && (
                <div key={i}>
                  <LivroCard el={e} idx={i} />
                </div>
              )
            }
            return (
              <div key={i}>
                <LivroCard el={e} idx={i} />
              </div>
            )
          })}
        </div>
      </div>

    </>
  );
}
