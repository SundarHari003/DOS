import React from 'react'
import foot from '../assets/footer.png'
import { GrInstagram, GrLinkedin, GrMagic, GrMail, GrMeta, GrSend } from "react-icons/gr";
const Footer = () => {
  return (
    <div className=''>
        <footer className='min-h-screen bg-gradient-to-r from-blue-600 to-green-500 rounded-t-3xl w-full flex flex-wrap justify-center items-center md:justify-normal md:items-start text-white'>
            <div className=' flex justify-center items-center w-3/4 md:w-2/4' data-aos="zoom-in">
              <img src={foot} alt="footer-image"/>
            </div>
            <div className=' w-3/4 md:w-2/4 flex flex-col justify-center'>
              <div className=' my-5 flex flex-col gap-6' data-aos="fade-right">
                <h5 className=' text-xl'>Contact Us</h5>
                <h1 className=' font-bold text-4xl'>Lets Connected With Each Others</h1>
                <h2 className=' font-semibold text-2xl'>Ready to take your career to the next level?</h2>
                <h3 className=' text-xl'>Subscribe now and become part of our vibrant Community!</h3>
              </div>
              <div className=' flex items-center m-10 ms-0' data-aos="fade-right" data-aos-delay="200">
                <input type="email" name="email" id="email" placeholder='Enter your E-mail Id' className=' relative focus:outline-none w-full md:w-4/6 p-3 rounded-full text-black text-xl border-2 border-white placeholder:text-gray-300 bg-white bg-opacity-25'/>
                <label htmlFor="email" className=' relative -left-14 rounded-e-full cursor-pointer'><GrSend size={35}/></label>
              </div>
              <div className=' text-xl' data-aos="fade-right" data-aos-delay="400">
                <ul className=' list-none flex flex-col gap-2'>
                  <li >For More Connection</li>
                  <li className=' flex items-center gap-1'><GrMail/>Support@dosclub.com</li>
                  <li className=' flex items-center gap-1'><GrLinkedin/>LinkedIn</li>
                  <li className=' flex items-center gap-1'><GrMagic/>Mighty Network</li>
                </ul>
              </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer