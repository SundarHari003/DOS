import React from 'react'
import touch from '../assets/touch.png'
const Indust = () => {
  return (
    <div className=' relative top-20'>
        <div className=' bg-green-400 min-h-screen flex justify-around items-center flex-col rounded-3xl'>
            <h1 className=' text-4xl text-white font-semibold text-center'>Industrial Partners</h1>
            <p className=' w-3/4 text-white text-2xl text-center'>Our Institutional Partnerships extend beyond mere cooperation; they represent a shared commitment to excellence, integrity, and social responsibility. Together, we create empowering individuals and communities to thrive.
</p>
            <div className=' flex w-full justify-center items-center h-full gap-5'>
                <div className=' bg-white flex justify-center items-center p-6 rounded-lg w-2/4 lg:w-1/4'>
                    <img src={touch} alt="touch"  className=' object-contain'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Indust