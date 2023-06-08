import { useGlobalStore } from '../store/global'
import { Link } from "react-router-dom";

function InnerSideBar() {

  const { showSideBar }: any = useGlobalStore(s => s)
  return (<>
    <div className={`z-0 absolute top-20 text-center h-[94vh] bg-gradient-to-r from-transparent via-gray-600/70 to-transparent w-[20%] flex flex-col pt-10`}>
      <h1 className=' mb-6 text-white font-mono font-bold text-3xl'>Library' Williams</h1>
      <hr className='w-10/12 mb-6'/>
      <div className='flex flex-col gap-2 -z-20'>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-500' to={'/autores'}>Autores</Link>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-500' to={'/livros'}>Livros</Link>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-500' to={'/generos'}>Generos</Link>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-500' to={'/carrinho'}>Carrinho</Link>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-500' to={'/novousuario'}>Criar Conta</Link>
        <Link className='text-white font-mono font-bold text-xl rounded-xl p-3 hover:bg-gray-500' to={'/minhaconta'}>Minha Conta</Link>
        
      </div>
    </div>
    <div className={`z-10 absolute top-20 right-5 text-center h-[94vh] bg-gradient-to-r from-transparent via-gray-600/70 to-transparent w-[25%] flex flex-col pt-10`}>
    </div>
  </>
  )
}

export default InnerSideBar