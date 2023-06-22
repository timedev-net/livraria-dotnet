import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useGlobalStore } from '../store/useGlobalStore';
import { useEffect, useState } from 'react';

export default function ModalFinalizaPedido({openModal, setOpenModal}: any) {

  const {
    register,
    handleSubmit,
    setValue, watch,
    reset
  } = useForm({});
  const { createVenda, createCliente, getClienteAll, carrinhoList }: any = useGlobalStore(s => s)
  const navigate = useNavigate();
  const [hasClient, setHasClient] = useState<any>();
  const cpf = watch('cpf')

  async function onSubmit(data: any) {
    if (hasClient) {
      createVenda({
        clienteId: hasClient[0].id,
        livrosId: carrinhoList.map((e: any) => e.id),
        dataCompra: new Date().toISOString().split('T')[0],
        total: carrinhoList.reduce((a: number, e: any) => a + e.preco, 0),
        status: true
      })
    } else { // cria o cliente e depois a venda
      const client = await createCliente(data)
      createVenda({
        clienteId: client.id,
        livrosId: carrinhoList.map((e: any) => e.id),
        dataCompra: new Date().toISOString().split('T')[0],
        total: carrinhoList.reduce((a: number, e: any) => a + e.preco, 0),
        status: true
      })
    }
    localStorage.removeItem('ListCar')
    closeModal()
    navigate('/venda')
  }

  async function getCliente(cpf: string) {
    if (cpf?.length > 10) {
      const cliente = await getClienteAll(cpf) // buscar cliente pelo cpf
      if (cliente.length > 0) { // se existir cliente preencher o formulario e atualizar o state
        setHasClient(cliente);
        setValue('nome', cliente[0].nome)
        setValue('email', cliente[0].email)
      }
    }
  }

  function closeModal() {
    setHasClient(false)
    setOpenModal(false)
    reset()
  }

  useEffect(() => {
    getCliente(cpf)
  }, [cpf])
  

  

  return (
    
    <div className={`bg-gray-950/75 absolute inset-0 z-50 grid place-content-center ${!openModal && 'hidden'}`}>
        <div className="relative w-[50vw]">

        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={closeModal} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
            x
            <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Informe o cliente para finalizar a venda</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                <label htmlFor="cpf" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CPF</label>
                <input {...register("cpf")} maxLength={11} type="text" id="cpf" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div>
                <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                <input {...register("nome")} type="text" id="nome" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                <input {...register("email")} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                </div>

                <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Finalizar Venda</button>

            </form>
            </div>
        </div>
        </div>
    </div>
      
  )
}
