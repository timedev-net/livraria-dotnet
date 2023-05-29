import { BsCart4, BsHeartFill } from 'react-icons/bs'

export default function LivroCard(props: any) {
 
  return (
  <>
    <div className="z-40 flex flex-wrap gap-8 ml-3">
      <div className="overflow-visible border rounded-xl w-80 p-2 bg-gradient-to-r from-indigo-100 to-emerald-100 to-90%">
        <img className="cursor-pointer float-left shadow-xl relative -left-5 top-1 -mr-2 mb-1 w-auto h-52" src={`https://picsum.photos/id/6${props.idx}/160/200`}/>
        <button title='Adicionar aos favoritos' className='hover:bg-green-200 p-1 rounded-md float-right inline'><BsHeartFill className="inline text-gray-700"/></button>
        {/* <button title='Adiciona no carrinho' className='hover:bg-green-200 p-1 rounded-md float-right inline'>+<BsCart4 className="inline text-gray-700"/></button> */}
        <h1 className="cursor-pointer text-xl leading-6 mb-1 font-semibold hover:text-gray-500">Nome do Livro</h1> 
        <p className="font-semibold">Frota, Daniel</p>
        <p className="text-sm font-semibold mb-2">2021</p>
        <p className="text-sm mb-2">Ficção Científica, Terror</p>
        <p className="font-mono font-semibold text-right">R$ <span className='text-4xl'>15</span>,99</p>
        <p className="font-mono  text-right">Frete GRÁTIS</p>
        
      </div>
    </div>
  </>
  );
}
