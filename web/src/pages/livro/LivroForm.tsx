import { useFieldArray, useForm } from "react-hook-form";
import { useGlobalStore } from '../../store/useGlobalStore'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function LivroForm(props: any) {

  const {
    createLivro,
    LivroShow,
    updateLivroById,
    getLivroById,
    getAutorAll,
    getGeneroAll,
    autoresList,
    generosList,
    attAutoresList,
    attGenerosList,
    getLivroAll,
  }: any = useGlobalStore(s => s)
  const [idParam, setIdParam] = useState<number>();
  const [dropAutores, setDropAutores] = useState<boolean>(false);
  const [dropGeneros, setDropGeneros] = useState<boolean>(false);
  const navigate = useNavigate();
  let { id } = useParams();
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    setValue, control
  } = useForm({
    // mode: "onChange"
  });
  // const autores = useFieldArray({
  //   control,
  //   name: "autores",
  //   keyName: "key",
  // });
  // const generos = useFieldArray({
  //   control,
  //   name: "generos",
  //   keyName: "key",
  // });

  // const pesquisa_autor = watch('pesquisa_autor')

  async function onSubmit(data: any) {    
    const autoresId = autoresList.reduce((a: any, el: any) => el.checked? a = [...a, el.id] : a, [])
    const generosId = generosList.reduce((a: any, el: any) => el.checked? a = [...a, el.id] : a, [])

    console.log(data)
    if (idParam) {
      await updateLivroById(idParam, { id: idParam, ...data })
    } else {
      await createLivro({...data, preco: +data.preco.replace(',', '.'), autoresId, generosId})
    }
    await getLivroAll()
    navigate('/Livro')
    // console.log({...data, autoresId, generosId})
    // console.log(autoresId)
    // console.log(generosId)
  }

  const handleAutoresCheck = (e: any) => {
    const nArray = autoresList.map((el: any) => 
    {
      el.id === e.id && (el.checked = !el.checked)
      return el
    })
    attAutoresList(nArray)
  }
  const handleGenerosCheck = (e: any) => {
    const nArray = generosList.map((el: any) => 
    {
      el.id === e.id && (el.checked = !el.checked)
      return el
    })
    attGenerosList(nArray)
  }

  useEffect(() => {
    (async () => {
      await getAutorAll()
      await getGeneroAll()
    })()
  }, [])

  useEffect(() => {
    if (LivroShow) {
      setValue('titulo', LivroShow.titulo);
    }
  }, [LivroShow])

  useEffect(() => {
    if (id) {
      getLivroById(id)
      setIdParam(+id)
    }
  }, [id])

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-10">
        <h1 className="text-white mb-5 font-mono w-full">Preencha o formulário corretamente:</h1>
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800">
            <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cadastro do Livro</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-1 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input {...register("titulo")} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="titulo" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Título</label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input {...register("publicadoEm")} type="date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="publicadoEm" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Data da Publicação</label>
                </div>
              </div>
         
              <div className="mb-6">
                <button onClick={() => setDropAutores(!dropAutores)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                  Selecione os autores
                </button>
                <div id="dropdownSearch" className={`${!dropAutores && 'hidden'} z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700`}>
                  <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                    {autoresList.map((e: any, i: number) => (
                      <li key={e.id}>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                          <input type="checkbox" id={`autores.${i}`} onChange={() => handleAutoresCheck(e)} checked={e.checked} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label htmlFor={`autores.${i}`} className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{e.nome}</label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="my-6">
                <button onClick={() => setDropGeneros(!dropGeneros)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                  Selecione os generos
                </button>
                <div id="dropdownSearch" className={`${!dropGeneros && 'hidden'} z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700`}>
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
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input {...register("imagemcapa")} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="imagemcapa" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Imagem da Capa</label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input {...register("preco")} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="preco" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Preço</label>
                </div>
              </div>
             

             <div className="flex justify-end">
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{idParam ? 'Atualizar' : 'Cadastrar'}</button>
             </div>
            </form>
          </div>
      </div>
    </>
  );
}
