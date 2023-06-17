import AutorCard from "../../components/AutorCard";

export default function GenerosList() {

  const a = new Array(5).fill(1)

  return (
    <>


      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white mb-5 font-mono w-[50%]">Procure por Gênero:</h1>
        <div className="flex flex-wrap gap-4 max-w-[60%] justify-center">
          {a.map((e, i) => <AutorCard idx={i} />)}
        </div>
      </div>

    </>
  );
}
