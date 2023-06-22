import { useEffect } from 'react';
import { MdEditSquare } from 'react-icons/md'
import { Link } from 'react-router-dom';

export default function LivroCard({ el, idx }) {

  // useEffect(() => {
  //   console.log(el);
  // }, [el])


  return (
    <>
      <div className="z-40 flex flex-wrap gap-8 ml-3">
        <div className="w-96 overflow-visible border rounded-xl p-2 bg-gradient-to-r from-indigo-100 to-emerald-100 to-90%">
          <Link to={`/livro/${el.id}`}>
            <img className="cursor-pointer float-left shadow-xl relative -left-5 top-1 -mr-2 mb-1 w-auto h-52" src={el.imagemCapa} />
          </Link>

          <div className='flex flex-col justify-around'>
            <div className=''>
              <button title='Adicionar aos favoritos' className='p-1 rounded-md float-right inline'><MdEditSquare className="inline text-gray-700" /></button>
              {/* <button title='Adiciona no carrinho' className='hover:bg-green-200 p-1 rounded-md float-right inline'>+<BsCart4 className="inline text-gray-700"/></button> */}
              <h1 className="cursor-pointer text-xl leading-6 mb-1 font-semibold hover:text-gray-500">{el.titulo}</h1>
            </div>
            <div className='h-28 min-h-full'>
              {el.autor.map((e) => (
                <p key={e.id} className="font-semibold">{e.nome}</p>
              ))}
              <p className="text-lg font-semibold mb-2">{el.publicadoEm.split('-')[0]}</p>

              <p className="text-sm mb-2 whitespace-nowrap">{el.genero.map((e: any) => e.nome).join(', ')}</p>
              {/* <p className="text-sm mb-2 ">{el.genero.map((e: any) => e.nome).join(', ')}</p> */}
            </div>
            <div className=''>
              <p className="font-mono font-semibold text-right">R$ <span className='text-4xl'>{el.preco ? el.preco.toString().split('.')[0] : '0'}</span>,{el.preco ? el.preco.toFixed(2).toString().split('.')[1] : '00'}</p>
              <p className="font-mono  text-right">Preço de à vista</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
