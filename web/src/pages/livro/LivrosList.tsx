import LivroCard from "../../components/LivroCard";

export default function LivrosList() {

  const a = new Array(15).fill(1)

  return (
    <>


      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white mb-5 font-mono w-[50%]">Livros diponíveis à venda:</h1>
        <div className="flex flex-wrap gap-4 max-w-[60%] justify-center">
          {a.map((e, i) => <LivroCard idx={i} />)}
        </div>
      </div>

    </>
  );
}
