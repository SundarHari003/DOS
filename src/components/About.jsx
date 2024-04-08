import React from 'react'
import ask from '../assets/ask.png'
import web from '../assets/web.png'
import event from '../assets/event.png'
const About = () => {
  return (
    <div className=' relative top-20'>
        <div className=' min-h-screen w-full rounded-3xl '>
            <ul className=' text-xl font-semibold text-center mt-10'>
                <li>Why DOS club?</li>
            </ul>
            <div className='w-full flex flex-col items-center'>
                <h1 className=' text-[2.5rem] lg:text-[4rem] text-center'>We help grow up your skills</h1>
                <p className=' text-xl text-center w-4/6'>Our platform is dedicated to helping you enhance your skills through the support of our vibrant community. We assist in Collaborative Learning, Expert Guidance, Personalized Support, Continuous Improvement.</p>
            </div>
            <div className=' flex gap-8 w-full justify-center items-center mt-12 flex-wrap mb-10'>
                <div data-aos="fade-down" data-aos-delay='100' className=' w-2/4 lg:w-1/4 flex items-center flex-col border-2 border-white hover:border-green-500 border-dotted rounded-lg'>
                    <img src={ask} alt="question photo" width={200} height={200}/>
                    <h2 className=' text-2xl font-bold text-center'>Ask Questions</h2>
                    <p className=' text-[1.2rem] text-gray-500 text-center'>Manage all your online and offline sales in one place with a single integration, simplifying reporting</p>
                </div>
                <div data-aos="fade-down" data-aos-delay='200' className=' w-2/4 lg:w-1/4 flex flex-col items-center border-2 border-white hover:border-green-500 border-dotted rounded-lg'>
                    <img src={web} alt="question photo" width={200} height={200}/>
                    <h2 className=' text-2xl font-bold text-center'>Webinar</h2>
                    <p className=' text-[1.2rem] text-gray-500 text-center'>Manage all your online and offline sales in one place with a single integration, simplifying reporting</p>
                </div>
                <div data-aos="fade-down" data-aos-delay='200' className=' w-2/4 lg:w-1/4 flex flex-col items-center border-2 border-white hover:border-green-500 border-dotted rounded-lg'>
                    <img src={event} alt="question photo" width={200} height={200}/>
                    <h2 className=' text-2xl font-bold text-center'>Event & Workshop</h2>
                    <p className=' text-[1.2rem] text-gray-500 text-center '>Manage all your online and offline sales in one place with a single integration, simplifying reporting</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About