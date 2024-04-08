import React from 'react'
import hero from '../assets/hero.png'
import mbcie from '../assets/mbcie.png'
const Team = () => {
  return (
    <div className=' relative top-20'>
        <div className=' bg-blue-400 min-h-screen flex justify-around items-center flex-col rounded-t-3xl'>
            <h1 className=' text-4xl text-white font-semibold my-10 md:my-0'>Collaborative Partners</h1>
            <p className=' w-3/4 text-white text-2xl text-center'>Through strategic alliances with leading industry players, we leverage collective expertise, resources, and networks to tackle complex challenges and capitalize on emerging opportunities.</p>
            <div className=' flex w-full justify-center items-center h-full gap-5 flex-wrap m-10 lg:m-10'>
                <div className=' bg-white flex justify-center items-center p-6 rounded-lg w-2/4 lg:w-1/4 h-1/4'>
                    <img src={hero} alt="hero"  className=' object-contain'/>
                </div>
                <div className=' bg-white flex justify-center items-center p-6 rounded-lg w-2/4 lg:w-1/4'>
                    <img src={mbcie} alt="mbcie" className=' object-contain'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team