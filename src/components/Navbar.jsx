import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
const Navbar = () => {
  const[menu,setMenu]=useState(true);
  const handleOpen=()=>{
    setMenu(!menu);
}
const closeMenu=()=>{
    setMenu(!menu);
}
  return (
    <div className=' bg-white fixed z-50 w-full top-0'>
        <nav>
          <div className='flex justify-between lg:mx-24 mx-2 items-center '>
            <div className=' flex items-center'>
                <img src={logo} alt="logo" width={50} height={50} className=' rounded-full m-4 me-1'/>
                <h1 className=" font-bold leading-none">Descience<br/>Open source<br/>Club</h1>
            </div>
            <div className=' hidden lg:flex gap-6 '>
                <button className=' text-xl font-bold hover:text-blue-600 transition-all duration-500'>Who we are?</button>
                <button className=' text-xl font-bold hover:text-blue-600 transition-all duration-500'>Event & Workshop</button>
                <button className=' transition-all font-bold duration-500 text-xl text-green-500 border-green-500 border rounded-full py-3 px-5 hover:bg-green-500 hover:text-white'>Join us</button>
            </div>
            <div className=' flex items-center lg:hidden'>
                {
                    menu?( <CiMenuFries size={32} onClick={closeMenu}/>):(<IoCloseOutline size={32} onClick={handleOpen}/>)
                }
            </div>
          </div>
          <div className=' block lg:hidden'>
            <div className={`${menu?' opacity-0':' opacity-100'} flex  transition-all duration-300 flex-col items-center justify-center gap-2 absolute z-10 w-full bg-white p-5`}>
                <button className=' text-xl font-bold hover:text-blue-600 transition-all duration-500 border-b border-black w-full pb-5'>Who we are?</button>
                <button className=' text-xl font-bold hover:text-blue-600 transition-all duration-500 border-b border-black w-full pt-4 pb-5'>Event & Workshop</button>
                <button className=' w-1/4 transition-all font-bold duration-500 text-green-500 border-green-500 border rounded-full p-2 mt-4 hover:bg-green-500 hover:text-white'>Join us</button>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar