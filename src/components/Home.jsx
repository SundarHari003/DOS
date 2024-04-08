import React from 'react'
import gif from '../assets/anime2.gif'

const Home = () => {
    
  return (
    <div  className=' relative top-[5rem] z-0'>
        <div className=' flex sm:flex-nowrap flex-wrap justify-center items-center gap-3 lg:gap-5 min-h-[86vh] bg-gradient-to-t from-green-500 to-blue-500 sm:bg-gradient-to-r sm:from-blue-500 sm:to-green-500 rounded-t-3xl'>
            <div className=' -ms-5'>
                <img src={gif} alt="gif" className=' h-fit' height={350}/>
            </div>
            <div className='mt-0 lg:mt-5' data-aos="zoom-in">
                <h1 className=' text-[2.5rem] lg:text-[4rem]  font-semibold text-white leading-none '>Aims at<br/>encouraging &<br/>promoting<br/>communication</h1>
                <div className='  md:text-xl lg:text-xl flex flex-wrap gap-3 lg:gap-5 mt-10 mb-10 sm:mb-0'>
                    <button className=' rounded-full bg-green-800 sm:bg-green-500 text-white px-6 py-2'>Join Our Community</button>
                    <button className=' rounded-full border border-white text-white px-6 py-2'>Watch Videos</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home