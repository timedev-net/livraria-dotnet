import LivroCard from "../../components/LivroCard";
import { useEffect } from "react";
import { useGlobalStore } from '../../store/useGlobalStore'
import { Link, useNavigate } from "react-router-dom";

export default function LivrosList() {

  
  const navigate = useNavigate();
  const { livrosList, getLivroAll }: any = useGlobalStore(s => s)

  useEffect(() => {
    getLivroAll()
  }, [])
  useEffect(() => {
    console.log(livrosList)
  }, [livrosList])

  return (
    <>


      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white mb-5 font-mono w-[50%]">Livros diponíveis à venda:</h1>
        <button onClick={() => { navigate('/livro/cadastro') }} className={`text-white rounded text-sm px-1.5 py-1 bg-gray-600`}>+ Livro</button>
        <div className="flex flex-wrap gap-4 max-w-[60%] justify-center">
          
          {livrosList.map((e, i) => (
            <div key={i}>
              <LivroCard el={e} idx={i} />
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
