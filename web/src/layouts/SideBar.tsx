import { useGlobalStore } from '../store/global'
import { Link } from "react-router-dom";

function SideBar() {

  const { showSideBar }: any = useGlobalStore(s => s)
  return (
    <div className={`bg-gradient-to-b from-green-300 to-blue-400 transition-all shadow-lg overflow-hidden w-[20%] flex flex-col mt-8 pt-10 px-3 ${!showSideBar && '-ml-[19%] hover:ml-0'}`}>
      navbar {`${showSideBar}`}
      <Link to={'/livros'}>Livros</Link>
      <Link to={'/teste'}>teste</Link>
      <Link to={'/teste'}>teste</Link>
      <Link to={'/teste'}>teste</Link>
      <Link to={'/teste'}>teste</Link>
    </div>
  )
}

export default SideBar