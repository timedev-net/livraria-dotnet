import AutorCard from "../components/AutorCard";
import CarrinhoList from "../components/CarrinhoList";

export default function MinhaConta() {

  const a = new Array(5).fill(1)

  return (
    <>


      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white mb-5 font-mono w-[50%]">Minha Conta:</h1>
        <div className="flex flex-wrap gap-4 max-w-[60%] justify-center">
          <CarrinhoList/>
          <CarrinhoList/>
          <CarrinhoList/>
        </div>
      </div>

    </>
  );
}
