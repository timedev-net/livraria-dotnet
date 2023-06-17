import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useGlobalStore } from '../store/useGlobalStore'

function TopBar() {

  const { toggleSideBar }: any = useGlobalStore(s => s)
  return (
    <div className="z-50 overflow-visible h-20 fixed flex justify-center items-center shadow-lg gap-3 w-screen px-5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      {/* <button className='absolute left-4' onClick={toggleSideBar}>
        <AiOutlineMenu className='text-xl' />
      </button> */}
      <img src='src\assets\bobesponja.png' className='z-2 absolute left-20 h-24 mt-6'/>
      <h1 className="text-white text-4xl font-semibold font-mono">Livraria do Prof. William</h1>
    </div>
  )
}

export default TopBar