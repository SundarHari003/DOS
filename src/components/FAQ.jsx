import React, { useState } from 'react';

const FAQ= () => {
  const [isOpen, setIsOpen] = useState(null);
  const [isOpen2, setIsOpen2] = useState(null);

  const toggle = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };
 const toggle2 = (index) => {
    setIsOpen2(isOpen2 === index ? null : index);
  };
  const faqs = [
    {
      question: 'The Rise of Descience:',
      answer: 'Founded on the principles of openness, collaboration, and empowerment, the Descience Open Source Community has quickly risen to prominence within the technology sector. What began as a small group of enthusiasts sharing a passion for open-source software has evolved into a thriving ecosystem of developers, designers, and visionaries united by a common purpose.'
    },
    {
      question: 'The Rise of Descience:',
      answer: 'Founded on the principles of openness, collaboration, and empowerment, the Descience Open Source Community has quickly risen to prominence within the technology sector. What began as a small group of enthusiasts sharing a passion for open-source software has evolved into a thriving ecosystem of developers, designers, and visionaries united by a common purpose.'
    },
    {
      question: 'The Rise of Descience:',
      answer: 'Founded on the principles of openness, collaboration, and empowerment, the Descience Open Source Community has quickly risen to prominence within the technology sector. What began as a small group of enthusiasts sharing a passion for open-source software has evolved into a thriving ecosystem of developers, designers, and visionaries united by a common purpose.'
    },
    {
      question: 'The Rise of Descience:',
      answer: 'Founded on the principles of openness, collaboration, and empowerment, the Descience Open Source Community has quickly risen to prominence within the technology sector. What began as a small group of enthusiasts sharing a passion for open-source software has evolved into a thriving ecosystem of developers, designers, and visionaries united by a common purpose.'
    },
    // Add more FAQs here
  ];

  const faqs2 = [
    {
      question: 'The Rise of Descience:',
      answer: 'Founded on the principles of openness, collaboration, and empowerment, the Descience Open Source Community has quickly risen to prominence within the technology sector. What began as a small group of enthusiasts sharing a passion for open-source software has evolved into a thriving ecosystem of developers, designers, and visionaries united by a common purpose.'
    },
    {
      question: 'The Rise of Descience:',
      answer: 'Founded on the principles of openness, collaboration, and empowerment, the Descience Open Source Community has quickly risen to prominence within the technology sector. What began as a small group of enthusiasts sharing a passion for open-source software has evolved into a thriving ecosystem of developers, designers, and visionaries united by a common purpose.'
    },
    {
      question: 'The Rise of Descience:',
      answer: 'Founded on the principles of openness, collaboration, and empowerment, the Descience Open Source Community has quickly risen to prominence within the technology sector. What began as a small group of enthusiasts sharing a passion for open-source software has evolved into a thriving ecosystem of developers, designers, and visionaries united by a common purpose.'
    },
    {
      question: 'The Rise of Descience:',
      answer: 'Founded on the principles of openness, collaboration, and empowerment, the Descience Open Source Community has quickly risen to prominence within the technology sector. What began as a small group of enthusiasts sharing a passion for open-source software has evolved into a thriving ecosystem of developers, designers, and visionaries united by a common purpose.'
    },
    // Add more FAQs here
  ];
  return (
    <div className=' min-h-screen flex flex-col justify-evenly items-center relative top-20 mb-20'>
      <h5 className=' font-semibold mt-10'>Commonly Asked Questions</h5>
      <h1 className=' font-semibold text-3xl lg:text-6xl'> Frequently Asked Questions</h1>
      <div className=' flex text-xl  flex-wrap'>
        <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        {faqs.map((faq, index) => (
            <div key={index} className="mb-2">
            <div
                className="flex items-center justify-between w-full p-6 text-left text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200  border border-black hover:border-green-500"
                onClick={() => toggle(index)}
            >
                <span className=' font-bold'>{faq.question}</span>
                <span className=' cursor-pointer font-bold text-2xl'>{isOpen === index ? '-' : '+'}</span>
            </div>
            <div className={`${isOpen === index ? ' h-40 overflow-auto border' : ' h-0 overflow-hidden'}   text-gray-600 bg-gray-50 transition-all duration-300 border-white rounded hover:border-green-500`}>
                <p className='px-4 pt-2 pb-4'>{faq.answer}</p>
            </div>
            </div>
        ))}
        </div>
        <div className="w-full max-w-md pt-0 md:pt-2 p-2 mx-auto bg-white rounded-2xl">
        {faqs2.map((faq, index) => (
            <div key={index} className="mb-2">
            <div
                className="flex items-center justify-between w-full p-6 text-left text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200 border border-black hover:border-green-500"
                onClick={() => toggle2(index)}
            >
                <span className=' font-bold'>{faq.question}</span>
                <span className=' cursor-pointer font-bold text-2xl'>{isOpen2 === index ? '-' : '+'}</span>
            </div>
            <div className={`${isOpen2 === index ? ' h-40 overflow-auto border' : ' h-0 overflow-hidden'}   text-gray-600 bg-gray-50 transition-all duration-300  border-white hover:border-green-500 rounded`}>
                <p className='px-4 pt-2 pb-4'>{faq.answer}</p>
            </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
