import React from 'react'
import bg from '../assets/bgring.jpg'
import lap from '../assets/lap.png'
const Details = () => {
  return (
    <div className=' relative top-20'>
        <div className=' min-h-screen flex-wrap lg:flex-nowrap flex justify-around items-center w-full' style={{background:`url(${bg})  no-repeat center / cover`}} >
            <div className='w-3/4 lg:w-[25%] flex flex-col gap-12' data-aos="fade-right">
                <div className='text-center lg:text-start'>
                    <h4 className=' font-semibold'>Community Webinar</h4>
                    <h1 className=' text-5xl'>Webinar</h1>
                </div>
                <p className=' text-xl text-gray-500 text-center lg:text-start'>Designed to equip aspiring professionals with the essential skills and knowledge needed to excel in today's digital landscape, this webinar promises an immersive learning experience like no other.</p>
                <p className=' text-xl text-gray-500'><a href="#" className=' underline text-green-500 '>Click here</a> to get update on our webinars</p>
            </div>
            <div  className=' w-3/4 lg:w-[25%] flex flex-col justify-center items-center mt-12 lg:mt-10 lg:ms-3'>
                <img src={lap} alt="laptop" height={200} width={200} className=' rounded-xl'/>
                <button type='button' className='w-2/4 sm:w-1/4 lg:w-3/4 cursor-pointer rounded-full relative top-11 p-2 bg-gradient-to-r from-blue-600 to-green-500 text-white'>Register Now</button>
            </div>
            <div className=' w-3/4 lg:w-[25%] flex flex-col gap-5 ms-3 ps-3 my-14 lg:my-0' data-aos="fade-left" data-aos-delay="200" data-aos-offset="50" >
                <div>
                    <span className=' text-xl text-gray-500'>Wednesday, March 20 - 10:00 AM</span>
                    <h1 className=' text-2xl font-semibold'>Artificial Intelligence in CRM like never before</h1>
                </div>
                <div>
                    <span className=' text-xl text-gray-500'>Wednesday, March 20 - 10:00 AM</span>
                    <h1 className=' text-2xl font-semibold'>Basic tools and methods before you start UX</h1>
                </div>
                <div>
                    <span className=' text-xl text-gray-500'>Wednesday, March 20 - 10:00 AM</span>
                    <h1 className=' text-2xl font-semibold'>Artificial Intelligence in CRM like never before</h1>
                </div>
                <a href="#" className=' underline text-green-500 text-xl'>More Webinar</a>
            </div>
        </div>
    </div>
  )
}

export default Details