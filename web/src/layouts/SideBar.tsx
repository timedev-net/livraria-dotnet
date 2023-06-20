// import { useGlobalStore } from '../store/useGlobalStore'
import { Link } from "react-router-dom";

function SideBar() {

  // const { showSideBar }: any = useGlobalStore(s => s)
  return (<>
    <div className={`z-0 absolute top-20 text-center flex flex-col pt-10`}>
      <h1 className=' mb-6 text-white font-mono font-bold text-3xl'>Library' Williams</h1>
      <hr className='w-10/12 mb-6'/>
      <div className='flex flex-col gap-2 -z-20'>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-700' to={'/autor'}>Autores</Link>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-700' to={'/livro'}>Livros</Link>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-700' to={'/genero'}>Generos</Link>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-700' to={'/cliente'}>Clientes</Link>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-700' to={'/carrinho'}>Carrinho</Link>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-700' to={'/venda'}>Vendas</Link>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-700' to={'/minhaconta'}>Minha Conta</Link>
        
      </div>
    </div>
  </>
  )
}

export default SideBar