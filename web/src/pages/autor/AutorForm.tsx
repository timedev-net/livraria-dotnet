import { useForm } from "react-hook-form";
import { useGlobalStore } from '../../store/useGlobalStore'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AutorForm() {

  const { createAutor, autorShow, updateAutorById, getAutorById }: any = useGlobalStore(s => s)
  const [idParam, setIdParam] = useState<number>();
  const navigate = useNavigate();
  let { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm({});

  async function onSubmit(data: any) {
    if (idParam) {
      await updateAutorById(idParam, { id: idParam, ...data })
    } else {
      await createAutor(data)
    }
    setValue('nome', '');
    navigate('/autor')
  }

  useEffect(() => {
    if (autorShow) {
      setValue('nome', autorShow.nome);
    }
  }, [autorShow])

  useEffect(() => {
    if (id) {
      getAutorById(id)
      setIdParam(+id)
    }
  }, [id])

  useEffect(() => {
    return () => {
      setValue('nome', '');
    }
  }, [])

  return (
    <>
      <div className="w-full mx-10 flex flex-col items-center">
        <h1 className="text-white mb-5 font-mono w-full">Preencha o formulário corretamente:</h1>
        <div className="flex flex-wrap gap-4 max-w-[60%] justify-center">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800">
            <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cadastro do Autor</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 md:gap-6 relative z-0 w-full mb-6 group">
                <input {...register("nome")} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                <label htmlFor="nome" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{idParam ? 'Atualizar' : 'Cadastrar'}</button>
            </form>
          </div>


        </div>
      </div>

    </>
  );
}
