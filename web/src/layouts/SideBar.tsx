import { Link } from "react-router-dom";

function SideBar() {

  return (<>
    <div className={`max-w-sm w-full text-center flex flex-col p-2 border-r-2`}>
      <h1 className=' mb-6 text-white font-mono font-bold text-3xl'>Library Willians</h1>
      <hr className='w-10/12 mb-6'/>
      <div className='flex flex-col gap-2'>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-700' to={'/livro'}>Livros</Link>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-700' to={'/autor'}>Autores</Link>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-700' to={'/genero'}>Generos</Link>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-700' to={'/cliente'}>Clientes</Link>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-700' to={'/carrinho'}>Carrinho</Link>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-700' to={'/venda'}>Relatório de Vendas</Link>
      </div>
    </div>
  </>
  )
}

export default SideBar